export const handleValidation = (dirty) => {
  const response = {valid: true};

  //Name
  if (!dirty['fullName']) {
    response['field'] = 'fullName';
    response['message'] = 'Cannot be empty';
    response['valid'] = false;
    return response;
  }

  if (typeof dirty['fullName'] !== 'undefined') {
    if (!dirty['fullName'].match(/^[A-Za-z\s]+$/)) {
      response['field'] = 'fullName';
      response['message'] = 'Only letters';
      response['valid'] = false;
      return response;
    }
  }

  //Email
  if (!dirty['email']) {
    response['field'] = 'email';
    response['message'] = 'Cannot be empty';
    response['valid'] = false;
    return response;
  }

  if (typeof dirty['email'] !== 'undefined') {
    let lastAtPos = dirty['email'].lastIndexOf('@');
    let lastDotPos = dirty['email'].lastIndexOf('.');

    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && dirty['email'].indexOf('@@') == -1 && lastDotPos > 2 && (dirty['email'].length - lastDotPos) > 2)) {
      response['field'] = 'email';
      response['message'] = 'Email is not valid';
      response['valid'] = false;
      return response;
    }
  }

  //Numbers
  if(!dirty['numbers'] || !Array.isArray(dirty['numbers'])) {
    response['field'] = 'numbers';
    response['message'] = 'Cannot be undefined';
    response['valid'] = false;
    return response;
  }

  dirty['numbers'].forEach(data => {
    if(!data['type'] || data['type'] === '') {
      response['field'] = 'number type';
      response['message'] = 'Cannot be undefined';
      response['valid'] = false;
      return response;
    }

    if(!data['number'] || data['number'] === '') {
      response['field'] = 'number';
      response['message'] = 'Cannot be undefined';
      response['valid'] = false;
      return response;
    }
  })

  return response;
};
