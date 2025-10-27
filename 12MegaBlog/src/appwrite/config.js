import conf from '../conf/conf.js'
import {Client,Account, ID,Databases,Storage,Query} from "appwrite";

export class Service{
    Client = new Client();
    Databases;
    bucket;

    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.Databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client)
    }

    async createPost(slug,title,content,featuredImage,status,userId){
      
        try{
        
            return await this.Databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,
                {
                    title,slug,content,featuredImage,status,userId
                }
            )
        }
        catch(error){
            throw error
        }
    }

    async updatePost({title,slug,content,featuredImage,status,userId},){
        try{
          
            return await this.Databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,content,featuredImage,status,
            })
        }
        catch(error){
            throw error;
        }
    }

    async deletePost(slug){
        try{
     await this.Databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
     return true;
        }
        
        catch(error){
            throw error;
            
        }
    }

    async getPost(slug){
     try{
       return await this.Databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
     }
     catch(error){
        throw error;
     }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try{
          return await this.Databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
        queries,          )
        }
        catch(error){
            throw error;
            return false
        }
    }

    //file upload service

    async uploadFile(file){
        try{
          return await this.bucket.createFile(conf.appwriteBucketId,
            ID.unique(),
            file
          )
        }
        catch(error){
            throw error;
            return false;
        }
    }

    async deleteFile(fileId){
        try{
         await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
        }
        catch(error){
            throw error;
            
        }
    }

     getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId)

    }
}


const service = new Service()
export default service