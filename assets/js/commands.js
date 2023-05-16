const arrows = document.querySelectorAll('.arrow');

const searchInput = document.getElementById('searchInput');
const commandList = document.getElementById('commandList').getElementsByTagName('li');

searchInput.addEventListener('input', function() {
  const searchQuery = this.value.toLowerCase();
  for (let i = 0; i < commandList.length; i++) {
    const command = commandList[i].querySelector('.command-title').textContent.toLowerCase();
    if (command.includes(searchQuery)) {
      commandList[i].style.display = 'block';
    } else {
      commandList[i].style.display = 'none';
    }
  }
});

const listItems = document.querySelectorAll('.list-item');

listItems.forEach(function(listItem) {
  const arrow = listItem.querySelector('.arrow');
  const description = listItem.querySelector('.description');

  listItem.addEventListener('click', function() {
    arrow.classList.toggle('active');
    listItem.classList.toggle('show-description');

    if (listItem.classList.contains('show-description')) {
      description.style.maxHeight = '0px';
      description.style.padding = '10px';
      description.style.transition = 'max-height 0.2s ease, padding 0.5s ease';
      description.style.maxHeight = description.scrollHeight + 'px';
      const listItemHeight = listItem.offsetHeight;
      const descriptionRect = description.getBoundingClientRect();
      const descriptionHeight = descriptionRect.height + 40;
      listItem.style.transition = 'margin-top 0.3s ease';


      try {
        listItem.nextElementSibling.style.marginTop = descriptionHeight + 'px';
        listItem.nextElementSibling.style.transition = 'margin-top 0.3s ease';
      } catch (e) { }
      arrow.style.transform = 'rotate(45deg)';
      arrow.style.transition = 'transform 0.3s ease';
    } else {
      listItem.style.marginTop = '10px';
      try {
        listItem.nextElementSibling.style.marginTop = '10px';
      } catch (e) { }
      arrow.style.transform = 'rotate(0)';
      arrow.style.transition = 'transform 0.3s ease';
      description.style.maxHeight = '0px';
      description.style.padding = '0px';
      description.style.transition = 'max-height 0.2s ease, padding 0.3s ease';

      // After a small delay, reset the height to auto
      setTimeout(function() {
        description.style.maxHeight = null;
      }, 500); // Adjust the delay as needed (500 milliseconds in this example)
    }
  });
});
