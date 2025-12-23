import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

// --- ICONS ---
const Icons = {
  email: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  phone: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  map: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  cake: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>,
  user: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  back: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
};

function ProfilePage({ onLogout, onBack }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("app_user"));
    if (storedUser && storedUser.email) {
      fetchUserData(storedUser.email);
    } else {
        setLoading(false);
    }
  }, []);

  const fetchUserData = async (email) => {
    try {
      const { data, error } = await supabase
        .from('registration').select('*').eq('email', email).single();
      if (error) throw error;
      setUserData(data);
    } catch (error) {
      console.error("Fehler:", error);
    } finally {
      setLoading(false);
    }
  };

  const getInitials = (first, last) => {
    return `${first?.charAt(0) || ""}${last?.charAt(0) || ""}`.toUpperCase();
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE');
  };

  if (loading) return <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height:'80vh', color: '#667eea', fontWeight:'bold'}}>Lade Profil...</div>;

if (!userData) return (
    <div style={{textAlign: 'center', marginTop: '100px'}}>
        <h3>Keine Profildaten gefunden.</h3>
        <p style={{color: '#666', marginBottom: '20px'}}>
            Deine Sitzung ist veraltet (keine E-Mail gespeichert).
        </p>
        <button 
            onClick={onLogout} 
            style={{
                padding: '10px 20px', 
                backgroundColor: '#667eea', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                cursor: 'pointer'
            }}
        >
            Jetzt neu einloggen
        </button>
    </div>
  );
  return (
    // Hintergrund
    <div style={{backgroundColor: '#eef2f6', minHeight: '90vh', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      
      {/* Die Karte - jetzt schmaler */}
      <div style={styles.card}>
        
        {/* Header */}
        <div style={styles.header}>
            <button onClick={onBack} style={styles.backBtn}>
              {Icons.back}
            </button>
            <div style={styles.avatarContainer}>
                <span style={styles.avatarText}>
                    {getInitials(userData.firstname, userData.lastname)}
                </span>
            </div>
        </div>

        {/* Body */}
        <div style={styles.body}>
            <div style={{marginTop: '40px'}}>
                <h2 style={styles.name}>{userData.firstname} {userData.lastname}</h2>
                <p style={styles.role}>Lernender Entwickler</p>
            </div>

            {/* Vertikale Liste statt breitem Grid */}
            <div style={styles.list}>
                <InfoItem icon={Icons.email} label="E-Mail" value={userData.email} />
                <InfoItem icon={Icons.phone} label="Telefon" value={userData.number || "-"} />
                <InfoItem icon={Icons.map} label="Land" value={userData.land || "-"} />
                <InfoItem icon={Icons.cake} label="Geburtstag" value={formatDate(userData.geburt)} />
                <InfoItem icon={Icons.user} label="Geschlecht" value={
                    userData.gender === 'm' ? 'Männlich' : 
                    userData.gender === 'f' ? 'Weiblich' : 'Divers'
                } />
            </div>

            <div style={{marginTop: '30px'}}>
                <button onClick={onLogout} style={styles.logoutBtn}>
                    Abmelden
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

// Info Zeile (Kompakter)
const InfoItem = ({ icon, label, value }) => (
    <div style={styles.itemRow}>
        <div style={styles.iconWrapper}>
          {icon}
        </div>
        <div style={{display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
          <span style={styles.label}>{label}</span>
          <span style={styles.value} title={value}>{value}</span>
        </div>
    </div>
);

// --- CSS STYLES (ID-Card Style) ---
const styles = {
  card: {
    width: '100%', 
    maxWidth: '380px', // HIER IST DIE ÄNDERUNG: Viel schmaler!
    backgroundColor: 'white', 
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
    overflow: 'hidden',
    position: 'relative'
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    height: '130px', 
    position: 'relative', 
    display: 'flex', 
    justifyContent: 'center'
  },
  backBtn: {
    position: 'absolute', top: '15px', left: '15px', 
    background: 'rgba(255,255,255,0.25)', 
    border: 'none', color: 'white', 
    width: '35px', height: '35px', borderRadius: '50%', 
    cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center',
    transition: '0.2s'
  },
  avatarContainer: {
    width: '90px', height: '90px', backgroundColor: 'white', borderRadius: '50%',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    position: 'absolute', bottom: '-45px', 
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
  },
  avatarText: {
    fontSize: '2.2rem', fontWeight: 'bold', color: '#764ba2'
  },
  body: {
    padding: '0 25px 30px 25px', 
    textAlign: 'center'
  },
  name: {
    fontSize: '1.6rem', margin: '0', color: '#333', fontWeight: '700'
  },
  role: {
    color: '#888', margin: '5px 0 0 0', fontSize: '0.95rem'
  },
  list: {
    marginTop: '30px',
    display: 'flex', 
    flexDirection: 'column', 
    gap: '12px', // Abstand zwischen den Zeilen
    textAlign: 'left'
  },
  itemRow: {
    display: 'flex', alignItems: 'center', gap: '15px',
    padding: '10px 15px', borderRadius: '12px', backgroundColor: '#f8f9fc',
    border: '1px solid #f0f0f0'
  },
  iconWrapper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    width: '36px', height: '36px', borderRadius: '10px',
    backgroundColor: '#fff', color: '#667eea',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
  },
  label: {
    fontSize: '0.75rem', color: '#aaa', fontWeight: '600', textTransform: 'uppercase', marginBottom: '2px'
  },
  value: {
    fontSize: '0.95rem', color: '#444', fontWeight: '500', 
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' // Verhindert Umbruch bei langen Mails
  },
  logoutBtn: {
    backgroundColor: '#fff', border: '1px solid #ff6b6b', color: '#ff6b6b', padding: '12px',
    borderRadius: '10px', cursor: 'pointer', fontSize: '1rem', fontWeight: '600', 
    width: '100%', transition: '0.2s'
  }
};

export default ProfilePage;