export const VALIDATION_TYPE={
  EMAIL: 'email',
  PASSWORD: 'password'
}

export const validateTextField = ({type = '', value='', customInvalidateFn=()=>({ isInvalid: false, reason: null }) }) => {

  // should not be empty
  if(value === '') return { isInvalid: true, reason: 'Must not be empty' };
  
  // should not be undefined
  if(value === undefined) return { isInvalid: true, reason: 'Something unexpected has occurred' };
  
  // should not be null
  if(value === null) return { isInvalid: true, reason: 'Must not be empty' };
  
  if(type === VALIDATION_TYPE.EMAIL) {
    // must only contain allowed characters (alphanumeric chars, dots, and @)
    if(value.match(/[^\w@\.]/g)) return { isInvalid: true, reason: 'Must not contain spaces or non-email characters'}

    // must contain one @ symbol
    const atSymMatches = [...value.matchAll(/\@/g)]
    if(atSymMatches.length != 1) return { isInvalid: true, reason: 'Must contain one @ symbol' };

    // must contain alpha characters before the @
    const atSymIndex = value.indexOf('@')
    const betweenStartAndAtSymSubstring = value.substring(0, atSymIndex);
    const alphaCharMatchesBetweenStartAndAtSymSubstring = [...betweenStartAndAtSymSubstring.matchAll(/[A-Za-z]/g)];
    if(!alphaCharMatchesBetweenStartAndAtSymSubstring.length > 0) return { isInvalid: true, reason: 'Must contain text characters before the @ symbol' }
    
    // must contain at least one . symbol after the @
    const atSymSubstring = value.substring(atSymIndex);
    const periodAfterAtSymIndex = atSymSubstring.indexOf('.')
    if(periodAfterAtSymIndex === -1) return { isInvalid: true, reason: 'Must contain at least one period after @ symbol' }

    // TODO - must contain alpha characters between the @ and the first period
    // const betweenAtSymAndPeriodSubstring = value.substring(atSymIndex, periodAfterAtSymIndex);
    // const alphaCharMatchesBetweenAtSymAndPeriodSubstring = [ ...betweenAtSymAndPeriodSubstring.matchAll(/[A-za-z]/g) ]
    // if(!alphaCharMatchesBetweenAtSymAndPeriodSubstring.length > 0) return { isInvalid: true, reason: 'Must contain text characters between the @ symbol and the first period' }

  } else if(type === VALIDATION_TYPE.PASSWORD) {

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
