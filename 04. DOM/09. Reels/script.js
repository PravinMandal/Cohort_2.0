let reel = [
  {
    "username": "wander.with.aria",
    "profile": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    "reelVideo": "./assests/01.mp4",
    "isFollowed": true,
    "isLiked": false,
    "like": 142,
    "comment": 18,
    "share": 4,
    "captions": "Collecting moments that feel like sunshine.",
    "ismuted":true
  },
  {
    "username": "techno.elite",
    "profile": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "reelVideo": "./assests/02.mp4",
    "isFollowed": false,
    "isLiked": true,
    "like": 891,
    "comment": 47,
    "share": 19,
    "captions": "Building dreams, one code line at a time.",
    "ismuted":true
  },
  {
    "username": "lifeofnoah",
    "profile": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "reelVideo": "./assests/03.mp4",
    "isFollowed": true,
    "isLiked": true,
    "like": 503,
    "comment": 22,
    "share": 8,
    "captions": "Learning to love the little things a bit more every day.",
    "ismuted":true
  },
  {
    "username": "styled.by.mia",
    "profile": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "reelVideo": "./assests/04.mp4",
    "isFollowed": false,
    "isLiked": false,
    "like": 237,
    "comment": 15,
    "share": 3,
    "captions": "Outfits speak louder than words.",
    "ismuted":true
  },
  {
    "username": "urban.hustler",
    "profile": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "reelVideo": "./assests/05.mp4",
    "isFollowed": true,
    "isLiked": true,
    "like": 1290,
    "comment": 61,
    "share": 25,
    "captions": "Chasing goals bigger than my fears.",
    "ismuted":true
  },
  {
    "username": "serene.skies",
    "profile": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    "reelVideo": "./assests/01.mp4",
    "isFollowed": false,
    "isLiked": false,
    "like": 98,
    "comment": 6,
    "share": 1,
    "captions": "Breathing in moments of peace.",
    "ismuted":true
  },
  {
    "username": "chef.luca",
    "profile": "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    "reelVideo": "./assests/02.mp4",
    "isFollowed": true,
    "isLiked": false,
    "like": 421,
    "comment": 30,
    "share": 12,
    "captions": "Cooking isn’t just a skill, it’s a love language.",
    "ismuted":true
  },
  {
    "username": "fitbyzoe",
    "profile": "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    "reelVideo": "./assests/03.mp4",
    "isFollowed": true,
    "isLiked": true,
    "like": 778,
    "comment": 40,
    "share": 10,
    "captions": "One workout away from a better mood.",
    "ismuted":true
  },
  {
    "username": "midnight.artist",
    "profile": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    "reelVideo": "./assests/04.mp4",
    "isFollowed": false,
    "isLiked": true,
    "like": 612,
    "comment": 28,
    "share": 14,
    "captions": "Creating worlds no one has seen yet.",
    "ismuted":true
  },
  {
    "username": "travel.with.zen",
    "profile": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    "reelVideo": "./assests/05.mp4",
    "isFollowed": true,
    "isLiked": false,
    "like": 345,
    "comment": 17,
    "share": 5,
    "captions": "Every place I visit teaches me something new.",
    "ismuted":true
  }
]

let section = document.querySelector('section')

function addreel() {
  let sum = ""
  
  reel.forEach(function(elem, idx) {
      sum += `
              <div class="box">
                  <div id="${idx}" class="mute">
                      ${elem.ismuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-fill"></i>'}
                  </div>
                  <video  src=${elem.reelVideo} autoplay loop ${elem.ismuted ? "muted" : ""} playsinline></video>
                  <div class="bottom">
                      <div class="userdetail">
                          <img src=${elem.profile} alt="">
                          <h3>${elem.username}</h3>
                          <button id="${idx}" class="Follow">${elem.isFollowed ? "Unfollow" : "Follow"}</button>
                      </div>
                      <div class="caption">
                          <h3>${elem.captions}</h3>
                      </div>
                  </div>
                  <div class="right">
                      <div id="${idx}" class="like">
                          ${elem.isLiked ? `<i class="ri-heart-fill" style="color : red"></i>` : `<i class="ri-heart-line"></i>`}
                          <h4>${elem.like}</h4>
                      </div>
                      <div class="comment">
                          <i class="ri-chat-3-line"></i>
                          <h4>${elem.comment}</h4>
                      </div>
                      <div class="share">
                          <i class="ri-share-forward-line"></i>   
                          <h4>${elem.share}</h4>
                      </div>
                      <div class="more">
                          <i class="ri-more-2-fill"></i>
                      </div>
                  </div>
              </div>
      `
  })
  
  section.innerHTML = sum
}

addreel();


section.addEventListener('click',function(dets) {
  if(dets.target.className == "like") {
    if(!reel[dets.target.id].isLiked) {
      reel[dets.target.id].like++;
      reel[dets.target.id].isLiked = true;
    } else {
      reel[dets.target.id].like--;
      reel[dets.target.id].isLiked = false;
    }
    addreel();
  }

  if(dets.target.className == "Follow") {
    
    if(!reel[dets.target.id].isFollowed) {
      reel[dets.target.id].isFollowed = true;
    } else {
      reel[dets.target.id].isFollowed = false;
    }
    addreel();
  }

  if(dets.target.className == "mute") {
    if(!reel[dets.target.id].ismuted) {
      reel[dets.target.id].ismuted = true;
    } else {
      reel[dets.target.id].ismuted = false;
    }
    addreel();
  }

  // if(reel[dets.target.id])
  
})



