import { signUPSchema } from "@/lib/types";
import { error } from "console";
import { NextResponse } from "next/server";



export async function POST(request:Request){
    const data = await request.json()
    console.log(data);
    

    const result = signUPSchema.safeParse(data)
    let zodErrors = {}
        if(!result.success){
            result.error.issues.forEach((issue)=>{
                zodErrors = {...zodErrors,[issue.path[0]]:issue.message}
            })
        }
    
    return NextResponse.json(
        Object.keys(zodErrors).length > 0
        ? {
            success : false,
            error : zodErrors
        }:{
            success:true
        }
    )
}

