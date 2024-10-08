let blog = [];

function project(event) {
    event.preventDefault();

    let name = document.getElementById('nameInput').value;
    let sdate = document.getElementById('startDate').value;
    let edate = document.getElementById('endDate').value;
    let pesan = document.getElementById('message').value;
    let option = document.querySelector('input[name="technologies"]:checked').value;
    let images = document.getElementById('image').files;

    if (images.length > 0) {
        let inputImage = URL.createObjectURL(images[0]);

        let data = {
            nama: name,
            start: sdate,
            end: edate,
            description: pesan,
            subject: option,
            file: inputImage,
            createdAt: new Date(),
            author: "Ricky Pranata",
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
                        <div>Duration :</div>
                        <div>${blog[index].start} - ${blog[index].end}</div>
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

function editPost(index) {
    // Implement edit functionality here
}

function deletePost(index) {
    blog.splice(index, 1);
    renderBlog();
}
