import { serverurl } from './serverurl'
import { commonAPI } from './commonAPI'

// upload trailer

export const uploadTrailer = async(reqBody)=>{
    return await commonAPI('POST',`${serverurl}/trailer`,reqBody)
}

//upload music

export const uploadMusic = async(reqBody)=>{
    return await commonAPI('POST',`${serverurl}/song`,reqBody)
}

//upload review

export const uploadReview = async(reqBody)=>{
    return await commonAPI('POST',`${serverurl}/review`,reqBody)
}



//view tailer
export const ViewTrailer = async()=>{
    return await commonAPI('GET',`${serverurl}/trailer`,'')
}

//delete trailer 

export const deleteTrailer = async(id)=>{
    return await commonAPI('DELETE',`${serverurl}/trailer/${id}`,{})
}


//view songs

export const viewSongs = async()=>{
    return await commonAPI('GET',`${serverurl}/song`,'')
}

//delete songs 

export const deleteSong = async(id)=>{
    return await commonAPI('DELETE',`${serverurl}/song/${id}`,{})
}