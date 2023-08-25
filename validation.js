export const inputValidation = ()=>{
    const validateURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    if (!title){
      throw new Error('no title');
    }
    if (!photo){
      throw new Error('no photo');
    }
    if (!price){
      throw new Error('no price');
    }
    if (!validateURL.test(photo.value)){
      throw new Error('bad link');
    }
  
}