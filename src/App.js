// import { useState, useEffect, useMemo } from 'react';
// import { auth } from './firebase/firebase';
// import Auth from './components/Auth';
import {
  PageSettings, PageEditLabels, PageEditTemplates, PageNewIssuetype
} from './pages';

function App() {
  // const [user, loading, error] = useAuth(auth());
  // const [isMounted, setIsMounted] = useState(true);

  return (
    <div>
      <PageSettings />
      <PageEditTemplates />
      <PageEditLabels />
      <PageNewIssuetype />
    </div>
  )
}

export default App;
















// function useAuth(auth) {
//   const [user, setUser] = useState(undefined);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(undefined);

//   const handleUser = (value) => {
//     setUser(value);
//     setLoading(false);
//   };

//   const handleError = (error) => {
//     setError(error);
//     setLoading(false);
//   }

//   useEffect(() => {
//     const listener = auth.onAuthStateChanged(handleUser, handleError);
    
//     return () => {
//       listener();
//     }
//   }, [auth]);

//   return useMemo(() => [user, loading, error], [user, loading, error]);
// }

// const Test = ({ user, loading, error }) => {
//   if(loading) return <div>Loading...</div>
//   if(error) return <div>Error...</div>

//   return (
//     <div>
//       {user ?
//         <div>
//           <div>Logged in!</div>
//           <div>
//             <button onClick={() => auth().signOut()}>Sign Out</button>
//           </div>
//         </div>
//       :
//         <Auth />
//       }
//     </div>
//   );
// }