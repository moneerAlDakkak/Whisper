(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5bad616"],{"26d3":function(e,t,a){"use strict";a.r(t);var b=a("7a23"),n=Object(b["I"])("data-v-bb76b354");Object(b["u"])("data-v-bb76b354");var c={class:"page settings-page"},o=Object(b["i"])("span",{class:"logo"},"W",-1),d=Object(b["i"])("i",{class:"fas fa-bars fa-2x"},null,-1),r={class:"text-container"},i=Object(b["i"])("h1",null,"Welcome to the settings page !",-1),l=Object(b["i"])("p",null,[Object(b["h"])(" Here you can set your interests in people so we can match you with people who share the same interests with you ! "),Object(b["i"])("br"),Object(b["i"])("span",null,"Note: if you take a lot of time to match with people, try reducing the filters used.")],-1),s={class:"interests"},m=Object(b["g"])('<input type="checkbox" id="match-everyone" name="match-everyone" data-v-bb76b354><label for="match-everyone" data-v-bb76b354>Match me with anyone</label><div data-v-bb76b354><h3 data-v-bb76b354>I want to be matched with :</h3><div class="tags-container" data-v-bb76b354><input type="radio" id="male-tag" name="gender" data-v-bb76b354><label for="male-tag" data-v-bb76b354>Males</label><input type="radio" id="female-tag" name="gender" data-v-bb76b354><label for="female-tag" data-v-bb76b354>Females</label><input type="radio" id="any-gender" name="gender" data-v-bb76b354><label for="any-gender" data-v-bb76b354>Any</label></div></div><div data-v-bb76b354><h3 data-v-bb76b354>I want to be matched with people from :</h3><div class="tags-container" data-v-bb76b354><input type="radio" name="country" id="my-country-tag" data-v-bb76b354><label for="my-country-tag" data-v-bb76b354>My country</label><input type="radio" name="country" id="any-country-tag" data-v-bb76b354><label for="any-country-tag" data-v-bb76b354>Any country</label></div></div><div data-v-bb76b354><h3 data-v-bb76b354>My interests :</h3><div class="tags-container" data-v-bb76b354><input type="checkbox" id="sports" data-v-bb76b354><label for="sports" data-v-bb76b354>sports</label><input type="checkbox" id="music" data-v-bb76b354><label for="music" data-v-bb76b354>music</label><input type="checkbox" id="technology" data-v-bb76b354><label for="technology" data-v-bb76b354>technology</label><input type="checkbox" id="business" data-v-bb76b354><label for="business" data-v-bb76b354>business</label><input type="checkbox" id="travelling" data-v-bb76b354><label for="travelling" data-v-bb76b354>travelling</label><input type="checkbox" id="memes" data-v-bb76b354><label for="memes" data-v-bb76b354>memes</label><input type="checkbox" id="anime" data-v-bb76b354><label for="anime" data-v-bb76b354>anime</label><input type="checkbox" id="society" data-v-bb76b354><label for="society" data-v-bb76b354>society</label><input type="checkbox" id="gaming" data-v-bb76b354><label for="gaming" data-v-bb76b354>gaming</label><input type="checkbox" id="movies" data-v-bb76b354><label for="movies" data-v-bb76b354>movies</label><input type="checkbox" id="genre-drama" data-v-bb76b354><label for="genre-drama" class="movie-genre" data-v-bb76b354>drama</label><input type="checkbox" id="genre-action" data-v-bb76b354><label for="genre-action" class="movie-genre" data-v-bb76b354>action</label><input type="checkbox" id="genre-horror" data-v-bb76b354><label for="genre-horror" class="movie-genre" data-v-bb76b354>horror</label><input type="checkbox" id="genre-comedy" data-v-bb76b354><label for="genre-comedy" class="movie-genre" data-v-bb76b354>comedy</label><input type="checkbox" id="genre-superhero" data-v-bb76b354><label for="genre-superhero" class="movie-genre" data-v-bb76b354>superhero</label></div></div>',5);Object(b["s"])();var u=n((function(e,t,a,u,v,h){var y=Object(b["z"])("w-header");return Object(b["r"])(),Object(b["e"])("div",c,[v.isHeader?(Object(b["r"])(),Object(b["e"])(y,{key:0},{default:n((function(){return[o,Object(b["i"])("button",{onClick:t[1]||(t[1]=function(){return h.showNav&&h.showNav.apply(h,arguments)})},[d])]})),_:1})):Object(b["f"])("",!0),Object(b["i"])("div",r,[i,l,Object(b["i"])("div",s,[m,Object(b["i"])("button",{class:"save",onClick:t[2]||(t[2]=function(){return h.updateUserPrefs&&h.updateUserPrefs.apply(h,arguments)})},"save changes")])])])})),v=(a("b0c0"),a("8db1")),h={name:"Settings",data:function(){return{isHeader:!1}},components:{WHeader:v["a"]},computed:{thisUser:function(){return this.$store.state.user}},beforeMount:function(){""===this.thisUser.name&&document.getElementById("home-link").click()},methods:{showNav:function(){this.$store.commit("toggleNav")},updateUserPrefs:function(){var e,t;e=document.getElementById("male-tag").checked?"male":document.getElementById("female-tag").checked?"female":"any",t=document.getElementById("my-country-tag").checked?this.thisUser.details.country:"any";var a=document.getElementById("sports").checked,b=document.getElementById("music").checked,n=document.getElementById("technology").checked,c=document.getElementById("travelling").checked,o=document.getElementById("memes").checked,d=document.getElementById("anime").checked,r=document.getElementById("genre-drama").checked,i=document.getElementById("genre-action").checked,l=document.getElementById("genre-horror").checked,s=document.getElementById("genre-comedy").checked,m=document.getElementById("genre-superhero").checked,u=document.getElementById("match-everyone").checked,v={gender:e,country:t},h={sports:a,music:b,technology:n,travelling:c,memes:o,anime:d,movies:{drama:r,action:i,horror:l,comedy:s,superhero:m}};this.$store.commit("setUserPrefs",{userPrefs:v,userInterests:h,matchEveryOneStatus:u}),this.isHeader=!0,window.scrollTo(0,0),document.getElementById("home-link").click()}}};a("32bb");h.render=u,h.__scopeId="data-v-bb76b354";t["default"]=h},"32bb":function(e,t,a){"use strict";a("9e7c")},5749:function(e,t,a){},"8db1":function(e,t,a){"use strict";var b=a("7a23");function n(e,t,a,n,c,o){return Object(b["r"])(),Object(b["e"])("header",null,[Object(b["y"])(e.$slots,"default")])}var c={name:"WHeader"};a("ea08");c.render=n;t["a"]=c},"9e7c":function(e,t,a){},ea08:function(e,t,a){"use strict";a("5749")}}]);
//# sourceMappingURL=chunk-f5bad616.71f80c95.js.map