let blog = [];

function project(event) {
    event.preventDefault();

    let name = document.getElementById('nameInput').value;
    let startdate = document.getElementById('startDate').value;
    let enddate = document.getElementById('endDate').value;
    let pesan = document.getElementById('message').value;
    let option = document.querySelector('input[name="technologies"]:checked').value;
    let images = document.getElementById('image').files;

    if(startdate > enddate)
        {
          return alert("Start date cannot started earlier than end date");
        }
        let timeDifferencesMs = new Date(enddate) - new Date(startdate);
        let differencesDay = Math.floor(timeDifferencesMs / (1000 * 60 * 60 * 24));
        let differenceMonth = Math.floor(differencesDay / 30.437);
        let differenceYear = Math.floor(differenceMonth / 12);
        let dateDifferences;
        if (differenceYear > 0) {
          dateDifferences = `${differenceYear} Year ${differenceMonth%12} Month ${differencesDay%30} Day`;
        } else if (differenceMonth > 0) {
          dateDifferences = `${differenceMonth%12} Month ${differencesDay%30} Day`;
        } else {
          dateDifferences = `${differencesDay%30} Day`;
        }

    if (images.length > 0) {
        let inputImage = URL.createObjectURL(images[0]);

        let data = {
            nama: name,
            start: startdate,
            end: enddate,
            description: pesan,
            subject: option,
            file: inputImage,
            createdAt: new Date(),
            author: "Ricky Pranata",
            duration: dateDifferences,
        };

        blog.unshift(data);
        console.log(blog);
        renderBlog();
    } else {
        alert("upload ur image!!");
    }
}


// ================

function renderBlog() {
    document.getElementById("contents").innerHTML = "";

    for (let index = 0; index < blog.length; index++) {
        document.getElementById("contents").innerHTML += `
            <div class="blog-list">
                <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="${blog[index].file}" alt="blog_img"/>
                    </div>
                    <div class="blog-content">
                        <h1>
                            <a href="blog-detail.html" target="_blank">${blog[index].nama}</a>
                        </h1>
                        <div >Duration :</div>
                        <div style =" font-size: 14px";>${blog[index].duration}</div>
                        <div class="detail-blog-content">
                            ${getFullTime(blog[index].createdAt)} | ${blog[index].author}
                        </div>
                        <div>
                            <p class="paragraf">Option :${blog[index].subject}
                            <p class="paragraf">Description :${blog[index].description}</p>
                        </div>
                        <div style="margin: 10px; float: right; color: gray;">
                            <p style="font-size: 15px;">
                                ${getDistanceTime(blog[index].createdAt)}
                            </p>
                        </div>
                        <div class="btn-group">
                            <button class="btn-edit" onclick="editPost(${index})">Edit Post</button>
                            <button class="btn-delete" onclick="deletePost(${index})">Delete Post</button>
                        </div>
                </div>
            </div>
        `;
    }
}

function getFullTime(date) {
    return date.toLocaleDateString();
}

function getDistanceTime(date) {
    const now = new Date(); 
    const distance = Math.abs(now - date);
    const minutes = Math.floor(distance / (1000 * 60));
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(distance / (1000 * 60 * 60));
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    return `${days} days ago`;
}

function deletePost(index) {
    blog.splice(index, 1);
    renderBlog();
}

setInterval( () => {
    renderBlog();
}, 1000
);

function editPost(index) {
    // Implement edit functionality here
}

