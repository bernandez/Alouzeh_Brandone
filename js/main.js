
const user_img = document.querySelector(".profile");
const userName = document.querySelector(".user-name");
const name = document.querySelector(".name");
const followers_ = document.querySelector(".followers");
const follow_ = document.querySelector(".following");
const repo_details = document.querySelector(".repo-details")
const num_repo = document.querySelector(".repo");
const btn_submit = document.querySelector(".btn_submit");


function fetchUser() {
    fetch(`https://api.github.com/users/bernandez`)
        .then(response => response.json())
        .then(function (data) {
            //I not testing live because unregistered user can hit data only 60 time per hour
            console.log(data);
                user_img.innerHTML = `<img src="${data.avatar_url}">`;
                userName.innerHTML = data.login;
                name.innerHTML = data.name
                followers_.innerHTML = data.followers;
                follow_.innerHTML = data.following;
                num_repo.innerHTML = data.public_repos;
                

        })
    fetch(`https://api.github.com/users/bernandez/repos`)
        .then(response => response.json())
        .then(function (repo_data) {
            console.log(repo_data);
            //if user type random name which is user but not have repository
            let repo_Data = repo_data.map(item => {
                        //console.log(item);
                        return (
                            `
                            <div class="item_">
                                <div class="repo_name"><h4>${item.name}<h4></div>
                                <div class="repo_details_">
                                    <div class="info_ star">

                                        <p><i class="far fa-star"></i>
                                        ${item.watchers}
                                        </p>
                                    </div>
                                    <div class="info_ fork">
                                        <p><i class="fas fa-code-branch"></i>
                                        ${item.forks}
                                        </p>
                                    </div>
                                    <div class="info_ size">
                                        <p><i class="far fa-file-archive"></i>
                                        ${item.size}kb
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            `
                        );
            });
            repo_details.innerHTML = repo_Data.slice(0, 6).join("");

        });
    fetch(`https://api.github.com/users/bernandez/repos?sort=created&direction=desc`)
        .then(response => response.json())
        .then(function(org_data){
            console.log('Orgs',org_data);
        });
}
fetchUser()
// Toggle
const toggleBtn = document.querySelector('.nav-toggle')
const navBar = document.querySelector('.links')

toggleBtn.addEventListener('click', function(){
    navBar.classList.toggle('show-links')
})

// tap buttons
const about = document.querySelector(".about-container");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
console.log(btns);

about.addEventListener('click', function(e){
    const id = e.target.dataset.id
    console.log(id);
    
    if (id){
        btns.forEach(function(btn){
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
    }
    articles.forEach(function(article){
        article.classList.remove('active')
        const element = document.getElementById(id)
        element.classList.add('active')
    })
})

const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    console.log(scrollHeight);
    if ( scrollHeight > 300){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove("show-link")
    }
})