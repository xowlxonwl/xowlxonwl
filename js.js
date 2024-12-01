function zoomimage(img)
{
  const zoom = document.getElementById("image-zoom");
  const zoomImg = document.getElementById("zoom-img");

  zoomImg.src = img.src;
  zoom.style.display = "flex";
  zoom.offsetHeight;
  zoom.classList.add("show");
}

function closeimage()
{
  const zoom = document.getElementById("image-zoom");

  zoom.classList.add("hide");
  zoom.addEventListener("transitionend", function()
  {
    zoom.style.display = "none";
    zoom.classList.remove("hide");
  });
}








document.querySelectorAll('.nav ul li a').forEach(link =>
{
  link.addEventListener('click', (event) =>
  {
    document.querySelectorAll('.nav ul li a').forEach(el =>
    {
      el.style.borderBottom = '3px solid transparent';
      el.style.color = '#FFF6E3';
    });
    event.target.style.borderBottom = '3px solid #b74b4b';
    event.target.style.color = '#b74b4b';

    setTimeout(() =>
    {
      event.target.style.borderBottom = '3px solid transparent';
      event.target.style.color = '#FFF6E3';
    }, 600);
  });
});
















const hamburger = document.getElementById('hamburger');
const navil = document.querySelector('.navil');

hamburger.addEventListener('click', (e) =>
{
  e.stopPropagation();
  
  navil.classList.toggle('show');
  hamburger.classList.toggle('open');

  if (navil.classList.contains('show'))
  {
    navil.style.animation = 'fadeIn 0.5s ease-out forwards';
  } else
  {
    navil.style.animation = 'fadeOut 0.5s ease-out forwards';
  }
});

document.addEventListener('click', (e) =>
{
  if (!hamburger.contains(e.target) && !navil.contains(e.target))
  {
    navil.classList.remove('show');
    hamburger.classList.remove('open');
    navil.style.animation = 'fadeOut 0.5s ease-out forwards';
  }
});


const navList = document.querySelector('.navil');

function toggleNav()
{
  navList.classList.toggle('show');
  hamburger.classList.toggle('open'); 

  if (navList.classList.contains('show'))
  {
    navList.style.animation = 'fadeIn 0.5s ease-out forwards';
  } else {
    navList.style.animation = 'fadeOut 0.5s ease-out forwards';
  }
}

function closeNav()
{
  navList.classList.remove('show');
  hamburger.classList.remove('open');
  navList.style.animation = 'fadeOut 0.5s ease-out forwards'; 
}

window.addEventListener('click', (e) =>
{
  if (!document.querySelector('.nav').contains(e.target))
  {
    closeNav();
  }
});

window.addEventListener('scroll', () =>
{
  closeNav();
});
