// pages/Profile.tsx
// Página de perfil del usuario (ruta protegida)
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SocialLink from '../StreamingComponents/SocialLink';
import EditProfileButton from './EditProfileButton';
import FollowButton from '../StreamingComponents/FollowButton';
import './Profile.css';
import type { User } from '../../GlobalObjects/Objects_DataTypes';
import Videos from './Videos';
import { useState } from 'react';

interface ProfileProps{
    GetUser : () => User | null
    users : User[]
    following : User[]
    doFollowing : (user: User) => void
}
const Profile = (props : ProfileProps) => {
    const { name } = useParams<{ name: string }>();
    const profiletoshow = props.users.find((user : User)=>{
            return user.name == name
        })
    const [Issighting, SetIssighting] = useState<boolean>(true)
    const user = props.GetUser()
    useEffect(() => {
    if (!user || !profiletoshow){
        return
    }
    if (profiletoshow.name == user.name){
        console.log("XD")
        SetIssighting(false)
    }
    },[profiletoshow, user]);
    if (!profiletoshow){
    return (
        <div className="container mt-5">
            <div className="alert alert-warning">
            No existe tal usuario
            </div>
        </div>
        );
    }
    const isFollowing = () =>{
        let following = false
        for (let i = 0; i < props.following.length; i++) {
            if (props.following[i].id == profiletoshow.id){
                following = true;
            }
        }
        return following
    }
return (
    <div className="container p-5 ">
        <div className="row justify-content-center">
            <div className="card position-relative  w-100 h-100">
                <div className="card-body">
                    <div className="card-body p-4 d-flex pb-5 border-bottom">
                        <img className="Profile_Img" src={profiletoshow.pfp} alt="Img"/>
                        <div className='d-flex bd-highlight flex-column'>
                            <div className="mx-5">
                                <div className="mb-3">
                                    <h1> {profiletoshow.name} <i className="bi bi-patch-check-fill"></i></h1>
                                    <h3> {profiletoshow.email}</h3>
                                    <p className = "">{profiletoshow.bio? profiletoshow.bio : `Hola soy ${profiletoshow.name} y hago streams!`}</p>
                                </div>
                            </div>
                            {
                                !Issighting? 
                                <div className="position-absolute top-0 end-0 m-4 d-flex justify-content-between">
                                    <EditProfileButton></EditProfileButton>
                                </div> 
                                : 
                                <div className="position-absolute top-0 end-0 m-4 d-flex justify-content-between">
                                    <FollowButton doFollowing = {props.doFollowing} isFollowing = {isFollowing()} user={profiletoshow}></FollowButton>
                                </div> 
                            }                            
                            <div className="d-flex mt-auto bd-highlight justify-content-center align-items-end">
                                <h3 className="mx-4"> <i className="bi bi-person-fill"></i> {profiletoshow.followers.length} </h3>
                                <h3 className="mx-4"> <i className="bi bi-person"></i> {profiletoshow.followed.length} </h3>
                                <div className="position-absolute end-0 me-4">
                                    <SocialLink link={profiletoshow.xlink} icon = "bi-twitter-x" text = ""></SocialLink>
                                    <SocialLink link={profiletoshow.instagramlink} icon = "bi-instagram" text = ""></SocialLink>
                                    <SocialLink link={profiletoshow.tiktoklink} icon = "bi-tiktok" text = ""></SocialLink>
                                    <SocialLink link={profiletoshow.discordlink} icon = "bi-discord" text = ""></SocialLink>
                                    <SocialLink link={profiletoshow.youtubelink} icon = "bi-youtube" text = ""></SocialLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-4 d-flex">
                        <Videos></Videos>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
};

export default Profile;
