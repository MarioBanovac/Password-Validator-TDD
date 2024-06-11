interface IOutput {
  valid: boolean | null
  error?: string[] | string
}

export default function passwordValidator(input: string): IOutput {
  let errors: string[] | string = []
  const output: IOutput = {
    valid: true,
    error: []
  }
  if(input.replace(/[^0-9]/g, '').length < 2) {
    output.valid = false
    errors.push('The password must contain at least 2 numbers')
  } 
  
  if(input.length < 8){
    output.valid = false
    errors.push('Password must be at least 8 characters')
  }
  
  if(!/[A-Z]/.test(input)) {
    output.valid = false
    errors.push('Password must contain at least one capital letter')
  }

  if(!/[^a-zA-Z0-9]/.test(input)) {
    output.valid = false
    errors.push('Password must contain at least one special character')
  }
  
  if(errors.length > 1) {
    errors = errors?.join('\n')
  } else {
    errors = errors.join('')
  }
  
  
  return {
    ...output,
    error: errors
  }
  }
