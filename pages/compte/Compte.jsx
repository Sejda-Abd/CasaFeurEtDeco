import { useRouter } from 'next/router';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useAuth } from '../components/AuthContext'; // Adjust the path as needed
import css from '../../styles/Compte.module.css';
import { Center, Notification } from '@mantine/core';
import crypto from 'crypto';
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

// Initialize Supabase client
const supabase = createClient(
  'https://bbestrfjyysgqwdzoprr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiZXN0cmZqeXlzZ3F3ZHpvcHJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MTY3NzYsImV4cCI6MjAzODE5Mjc3Nn0.mg-DXL_rB85Mad6G7kyYaETHL0AYB2zKs_5qiTeMGaU'
);

// Encryption settings
const algorithm = 'aes-256-cbc';
const secretKey = '7d7b365952c525882800f5d2d9e437fe2b7d3ad08749e8fdcc7c17902257a535';
const ivLength = 16; 

// Encrypt function
function encrypt(text) {
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`;
}

// Decrypt function
function decrypt(text) {
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedText = textParts.join(':');
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

export default function Compte() {
  const router = useRouter();
  const { login } = useAuth(); 
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from('auth')
        .select('*')
        .eq('id', loginId)
        .maybeSingle(); 

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        const decryptedPassword = decrypt(data.password);
        if (decryptedPassword === loginPassword) { 
          login(); // Set login status
          router.push('/');
        } else {
          setError('Identifiants incorrects');
        }
      } else {
        setError('Identifiants incorrects');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Une erreur est survenue: ' + error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    try {
      const { data: existingUser, error: checkError } = await supabase
        .from('auth')
        .select('id')
        .eq('id', email)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        throw checkError;
      }

      if (existingUser) {
        setError('Un compte avec cet email existe déjà');
        return;
      }

      const encryptedPassword = encrypt(password);

      const { data, error } = await supabase
        .from('auth')
        .insert([{ id: email, password: encryptedPassword }]);

      if (error) throw error;

      setError('Compte créé avec succès');
    } catch (error) {
      console.error('Registration error:', error);
      setError('Une erreur est survenue lors de la création du compte: ' + error.message);
    }
    
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <nav className={css.navbar}>
          <a href="#">Accueil Connexion</a>/<a href="#" className={css.active}>Inscription</a>
        </nav>
      </div>
      {error && <Notification color="red" onClose={() => setError(null)}>{error}</Notification>}
      <div className={css.forms}>
        <div className={css.formContainer}>
          <h2>Vous avez déjà un compte client ?</h2>
          <form className={css.form} onSubmit={handleLogin}>
            <div className={css.inputGroup}>
              <label>Identifiant * :</label>
              <input type="text" placeholder="Identifiant" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
            </div>
            <div className={css.inputGroup}>
              <label>Mot de passe * :</label>
              <input type="password" placeholder="Mot de passe" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            </div>
            <p className={css.mandatory}><Center>* Champs obligatoires</Center></p>
            <br></br> <br></br> <br></br>
            <button type="submit">Me Connecter</button>
            <br></br> 
          </form>
        </div>
        <div className={css.formContainer}>
          <h2>Je n'ai pas de compte client</h2>
          <form className={css.form} onSubmit={handleRegister}>
            <div className={css.inputGroup}>
              <label>Votre email * :</label>
              <input type="email" placeholder="Votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={css.inputGroup}>
              <label>Mot de passe * :</label>
              <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className={css.mandatory}><Center>* Champs obligatoires</Center></p>
            <p className={css.infoText}>Avec votre adresse email, créez votre compte afin de suivre vos commandes, profiter d'offres exclusives, constituer votre carnet d'adresses..</p>          
            <button type="submit">Créer un compte</button>
            <br></br>
          </form>
        </div>
      </div>
      <div className={css.footer}>
        <p>
          <center>Informations personnelles obligatoires pour permettre à Casa Fleur et Déco de créer et gérer votre compte, pour l'exécution et le suivi de vos commandes, pour vous constituer un carnet<br></br> d'adresse, pour personnaliser nos services et l'envoi d'informations sur ses produits / offres. Elles seront conservées pendant trois ans. Vous disposez des droits d'opposition, d'accès, de <br></br>rectification, de limitation et d'effacement, et d'un droit à la portabilité de vos données personnelles.</center>
        </p>
      </div>
    </div>
  );
}