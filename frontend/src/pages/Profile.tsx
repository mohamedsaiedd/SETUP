
import { useAuth } from "../constext/AuthContext";

export function Profile() {

    const { user } = useAuth()
    console.table(user);
    
    return( 
        <div className=" w-full flex flex-col items-center gap-[20px]">
            <div>{user?.avatar}</div>
            <div>{user?.name}</div>
            <div>{user?.bio}</div>
            <div>{user?.role}</div>
            <div>{user?.phone}</div>
            <div>{user?.email}</div>
        </div>
    )
}