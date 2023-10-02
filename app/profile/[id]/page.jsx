'use client'
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

function UserProfile({params}) {

  const {data: session} = useSession();
  const [posts, setPosts]=useState([]);

  const searchparams= useSearchParams();
  const username =searchparams.get('name')
    useEffect(() => {
        const fetchPosts= async () =>{
           const response = await fetch(`/api/users/${params?.id}/posts`);
           const data = await response.json();
           setPosts(data);
        } 
       // if(session?.user.id)
         fetchPosts();
     },[session?.user.id]);

  return (
    <Profile 
    name={username}
    desc={`Welcome to ${username} personalized profile page`}
    data={posts}
    />
  )
}

export default UserProfile
