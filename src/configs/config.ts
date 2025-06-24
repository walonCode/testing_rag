import 'dotenv/config'

function validateData(){
    return{
        API_KEY:process.env.API_KEY,
        PINE_CONE_API_KEY:process.env.PINE_CONE_API_KEY,
        PINE_CONE_INDEX_NAME:process.env.PINE_CONE_INDEX_NAME,
        OPENAI_KEY:process.env.OPENAI_KEY
    }
}

export const config = validateData()