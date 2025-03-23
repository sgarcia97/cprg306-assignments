"use client"
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { redirect } from 'next/navigation';


const Page = () => {
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// Sign in to Firebase with GitHub authentication
const signIn = async () => {
    await gitHubSignIn();
}

// Sign out of Firebase
const logOut = async () => {
    await firebaseSignOut();
}
 
// Display some of the user's information
return(
    <main className="main">
        <div className="header">
    {
        user ? 
        redirect("/week-10/shopping-list")
        (
            <>
            <div>
            Welcome, {user.displayName} ({user.email})
            </div> <button className="button1" onClick={logOut}>Logout</button>
     </>
        )
        : <><div>Shopping List App</div><button className="button1" onClick={signIn}>Login through GitHub</button></>
    }
    </div>
  </main>

)
}

export default Page;