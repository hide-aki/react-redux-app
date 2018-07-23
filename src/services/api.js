import axios from 'axios';
import ClientSession from './client-session.js';

let API_BASE = 'http://localhost:8989/api/';

export default class Api{

  static API_BASE = API_BASE;

  //POST
  static create(endPointName, data, filter){

  }

  static createRelated(parentName, parentId, childName, data) {
   
  }

  //GET
  static find(endPointName, id, filter){

  }

  static findRelated(parentName, parentId, childName, filter){

  }

  //PATCH
  static update(endPointName, id, data){

  }

  static updateRelated(parentName, parentId, childName, childId, data) {

  }

  //DELETE
  static destroy(endPointName, id){

  }

  static destroyAll(endPointName, filter){

  }

  static upload(container, files, progressCallback){
    
  }

  static deleteFile(container, file){
    
  }

  static deleteFiles(container, files){
    
  }

  //PUT
  static replace(endPointName, data){

  }

}
