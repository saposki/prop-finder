let xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.onload = () => {
  if(xhr.status === 200){
      var data = JSON.parse(xhr.responseText)
      // add active class to first item
      for( let j = 0; j < data.data.length; j++){

        let componentAtt = document.createAttribute('class');
        let componentAttId = document.createAttribute('id');
        let component = document.createElement('div');
        componentAtt.value = 'componentListing hideable item';
        componentAttId.value = j+1;
        component.setAttributeNode(componentAttId);
        component.setAttributeNode(componentAtt);

        let listItemImg = document.createElement('img');

        let contactAtt = document.createAttribute('id');
        let contact = document.createElement('h4');
        contact.append(data.data[j].phone);
        contactAtt.value = 'contact';
        contact.setAttributeNode(contactAtt);

        listItemImg.src = data.data[j].links.logo;

        component.append(listItemImg);
        component.appendChild(contact);
        document.getElementById('listing').appendChild(component)

        document.getElementById('1').className = 'active componentListing item';
      }

  } else{
    alert('Request failed. Status: ' + xhr.status);
  }
};

xhr.send()
