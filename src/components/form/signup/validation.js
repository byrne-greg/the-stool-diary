export const validateTextField = ({type = '', value='', customInvalidateFn=()=>({ isInvalid: false, reason: null }) }) => {
  console.log('validateTextField value', value);

  // should not be empty
  if(value === '') return { isInvalid: true, reason: 'Must not be empty' };
  
  // should not be undefined
  if(value === undefined) return { isInvalid: true, reason: 'Something unexpected has occurred' };
  
  // should not be null
  if(value === null) return { isInvalid: true, reason: 'Must not be empty' };
  
  if(type === 'email') {
    // must only contain allowed characters (alphanumeric chars, dots, and @)
    if(value.match(/[^\w@\.]/g)) return { isInvalid: true, reason: 'Must not contain spaces or non-email characters'}

    // must contain one @ symbol
    const atSymMatches = [...value.matchAll(/\@/g)]
    if(atSymMatches.length != 1) return { isInvalid: true, reason: 'Email must contain one @ symbol' };
    
    // must contain at least one . symbol after the @
    const atSymIndex = value.indexOf('@')
    const subst = value.substring(atSymIndex);
    if(subst.indexOf('.') === -1) return { isInvalid: true, reason: 'Must contain at least one period after @ symbol' }
    
    // must contain alpha characters before the @
    const alphaCharMatches = [...value.matchAll(/[A-Za-z]/g)];
    if(!alphaCharMatches.length > 0) return { isInvalid: true, reason: 'Must contain text characters' }

  } else if(type === 'password') {

    const commonPasswordValidationReason = 'Passwords must have 1 uppercase character, 1 lowercase character, 1 special character, and be more than 8 characters long' 

    // must contain more than 8 chars
    if(value.length < 8) return { isInvalid: true, reason: 'Password is less than 8 characters. ' + commonPasswordValidationReason }

    // must contain at least one special char
    const specialChars = [...value.matchAll(/[^\w]/g)]
    if(!specialChars.length > 0) return { isInvalid: true, reason: 'Password does not have a special character. ' + commonPasswordValidationReason }

    // must contain at least one uppercase char
    const uppercaseChars = [...value.matchAll(/[A-Z]/g)]
    if(!uppercaseChars.length > 0) return { isInvalid: true, reason: 'Password does not have an uppercase character. ' + commonPasswordValidationReason }

    // must contain at least one lowercase char
    const lowercaseChars = [...value.matchAll(/[a-z]/g)]
    if(!lowercaseChars.length > 0) return { isInvalid: true, reason: 'Password does not have a lowercase character. ' + commonPasswordValidationReason }

    // must contain at least one number
    const numberChars = [...value.matchAll(/[0-9]/g)]
    if(!numberChars.length > 0) return { isInvalid: true, reason: 'Password does not have a numeric character. ' + commonPasswordValidationReason }


  } else {

     // must contain more than 3 chars
     if(value.length < 3) return { isInvalid: true, reason: 'Must contain more than 3 characters' }
    
     // must not contain any special or numeric characters
     if(value.match(/[^A-Za-z]/g)) return { isInvalid: true, reason: 'Must not any special or numeric characters'}

  }
 
  // perform custom validation
  return customInvalidateFn();
}