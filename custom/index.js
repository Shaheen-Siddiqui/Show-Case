const blogSection = document.querySelector("#blog-section");
const projectSection = document.querySelector("#project-listing");

const fetchData = async () => {
  const response = await fetch("./custom/data.json");
  const data = await response.json();
  ConstructBlogs(data);
};

fetchData();

const ConstructBlogs = ({ blogs }) => {
  const serializedBlogs = serializer(blogs);

  serializedBlogs.forEach((blog, index) => {
    blogSection.innerHTML += `
     <div class="col-lg-4 col-md-6">
                    <div class="news-info">
                        <figure class="news-img"><a href="./blog-detail.html?id=${blog.id}"><img data-src="${blog.imageUrl}"
                                    alt="news image" class="blog-image lazyimg"></a>
                        </figure>
                        <div class="detail">
                            <label>${blog.createdAt} <a href="./blog-detail.html?id=${blog.id}">Business</a></label>
                            <h3 class="ellipse-1"><a href="./blog-detail.html?id=${blog.id}">${blog.name}</a></h3>
                            <p class="text-length ellipse-2">${blog.description} </p>
                            <div class="more-info">
                                <a href="./blog-detail.html?id=${blog.id}">Read More<span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
    `;
  });
  lazyLoadImages();
};

const serializer = (data) => {
  return Object.values(data);
};

// ----------PROJECT FUNCTIONS

const ProjectData = async () => {
  const response = await fetch("./custom/projects-data.json");
  const obtainResut = await response.json();
  obtainResut.forEach((project) => {
    projectSection.innerHTML += `
        
        <div class="col-lg-4 col-md-6">
        <div class="news-info">
        
            <figure class="news-img">
  <a target="_blank" href="${project.ProjectLink}"><img  data-src="${project.imageUrl}"alt="news imag" class="blog-image lazyimg"></a>
            </figure>

            <div class="detail">
                <h3 class="ellipse-1"><a>${project.name}</a></h3>
                <p class="ellipse-2">${project.description} </p>
            </div>
        </div>
    </div>
        `;
  });

  lazyLoadImages();
};

ProjectData();

const lazyLoadImages = () => {
  const images = document.querySelectorAll(".lazyimg");
  images.forEach((image) => {
    if (!image.getAttribute("data-loaded")) {
      const observer = new IntersectionObserver((entries) => {
        image.setAttribute("data-loaded", "true");


        if (entries[0].isIntersecting) {
          image.src = image.getAttribute("data-src");
          observer.disconnect();
        }
      },{rootMargin:'200px'});

      observer.observe(image);
    }
  });
};
lazyLoadImages();
