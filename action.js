const Main={template:'<div></div>'}
const Path3627700={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0432 \u0446\u0432\u0435\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0438)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path3635210={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u0438\u0449\u0438 \u0432 localStorage)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path2691620={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0432\u0432\u0435\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E quest \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path8272600={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043E\u0442\u043F\u0440\u0430\u0432\u044C \u043F\u0443\u0441\u0442\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 POST \u043D\u0430 \u0430\u0434\u0440\u0435\u0441 /quest/key =)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path2966320={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043E\u0442\u0432\u0435\u0442 \u043F\u0440\u044F\u043C\u043E \u043F\u043E\u0434 \u043D\u043E\u0441\u043E\u043C - \u0438\u0449\u0438 \u0441\u043A\u0440\u044B\u0442\u044B\u0435 \u0442\u0435\u0433\u0438)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path7975620={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u0438\u0449\u0438 \u043E\u0442\u0432\u0435\u0442 \u0432 \u043C\u0435\u0442\u0430\u0442\u0435\u0433\u0430\u0445)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path6823500={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043F\u0440\u0438\u0431\u0430\u0432\u044C \u043A \u043F\u0440\u043E\u0448\u043B\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0435 \u0444\u0430\u043A\u0442\u043E\u0440\u0438\u0430\u043B 15 - \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u043D\u043E\u0432\u0443\u044E \u0441\u0441\u044B\u043B\u043A\u0443)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path2376030={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043E\u0442\u043F\u0440\u0430\u0432\u044C PUT \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441 /quest/secretkey =)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path9786580={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u0443 \u043A\u043D\u043E\u043F\u043A\u0438 \u0435\u0441\u0442\u044C \u043D\u0435\u043E\u0431\u044B\u0447\u043D\u044B\u0435 \u0441\u0442\u0438\u043B\u0438)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path1234680={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0444\u0440\u0430\u0437\u0430 \u0438 \u0435\u0441\u0442\u044C \u043E\u0442\u0432\u0435\u0442)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path2348690={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u0434\u0432\u0430 \u0441\u043A\u0440\u0438\u043F\u0442\u0430, \u0432\u0442\u043E\u0440\u043E\u0439 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043E\u0442\u0432\u0435\u0442)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path3628800={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u0435\u0447\u0435\u043D\u044C\u043A\u0438)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path9874000={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043E\u0431\u0440\u0430\u0442\u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 bootstrap \u0441\u0442\u0438\u043B\u0435\u0439)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path6534800={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0432 \u0448\u0440\u0438\u0444\u0442\u0430\u0445 \u0443 body)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path8239650={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u0432 \u043A\u043E\u0434\u0435 \u043D\u0430\u0439\u0434\u0438 \u0441\u043B\u043E\u0432\u043E "\u0436\u043E\u043A\u0435\u0439", \u044D\u0442\u043E \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path3969200={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u0443\u0441\u0442\u0430\u043B\u0430 \u043F\u0440\u0438\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path4900200={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u0432 \u0441\u0442\u0438\u043B\u044F\u0445 \u0437\u0430\u043F\u0440\u044F\u0442\u0430\u043B\u043E\u0441\u044C \u0435\u0449\u0435 \u043E\u0434\u043D\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path1399700={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043F\u043E\u0438\u0449\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 abrakadabra.com)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path8902300={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043E\u0442\u0432\u0435\u0442 \u0437\u0430\u0440\u044B\u0442 \u043D\u0430 \u0441\u0442\u043C\u0432\u043E\u043B\u0435 178 \u0432 \u043A\u043E\u0434\u0435)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}};document.cookie='thereItIs=https://drive.google.com/file/d/1dYzDrh3VqE8gBJIvu-QR-R1omGDxDuQp/view?usp=sharing;';const Path1346600={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u0432\u044B\u043F\u043E\u043B\u043D\u0438 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u044E getKey)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path8093460={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043E\u0442\u043F\u0440\u0430\u0432\u044C \u0437\u0430\u043F\u0440\u043E\u0441 GET \u043D\u0430 \u0430\u0434\u0440\u0435\u0441 quest/secret)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path5992600={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043F\u043E\u0438\u0449\u0438 \u0432 \u0441\u0442\u0438\u043B\u044F\u0445 \u0448\u0438\u0444\u0440 \u0438 \u0440\u0430\u0437\u0433\u0430\u0434\u0430\u0439 \u0435\u0433\u043E)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path3440020={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u0433\u0434\u0435-\u0442\u043E \u0432 \u043A\u043E\u0434\u0435 \u0435\u0441\u0442\u044C \u0437\u0430\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u0434 - \u0432\u044B\u043F\u043E\u043B\u043D\u0438 \u0435\u0433\u043E)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},Path8903460={template:`
		<div class="card">
	      <div class="card-body">
	        <p>Нажми на кнопку тысячу раз!</p>
	        <button class="btn btn-warning" @click="increment">Ты пока нажал: {{n}} {{localization}}</button>
	        <p class="hint">{{hint}}</p>
	      </div>
	    </div>
	`,data:()=>{return{n:0,hint:''}},methods:{increment:function(){this.n++,1e3<this.n&&(this.hint='\u0443\u0436\u0435 \u043F\u043E\u0447\u0442\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435... \u043A\u043E\u0434\u043E\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E - sapiense)')}},computed:{localization:function(){return 1<this.n&&5>this.n?'\u0440\u0430\u0437\u0430':'\u0440\u0430\u0437'}}},router=new VueRouter({routes:[{path:'/',component:Main},{path:'/3627700',component:Path3627700},{path:'/3635210',component:Path3635210},{path:'/2691620',component:Path2691620},{path:'/8272600',component:Path8272600},{path:'/2966320',component:Path2966320},{path:'/7975620',component:Path7975620},{path:'/6823500',component:Path6823500},{path:'/2376030',component:Path2376030},{path:'/9786580',component:Path9786580},{path:'/1234680',component:Path1234680},{path:'/2348690',component:Path2348690},{path:'/3628800',component:Path3628800},{path:'/9874000',component:Path9874000},{path:'/6534800',component:Path6534800},{path:'/8239650',component:Path8239650},{path:'/3969200',component:Path3969200},{path:'/4900200',component:Path4900200},{path:'/1399700',component:Path1399700},{path:'/8902300',component:Path8902300},{path:'/1346600',component:Path1346600},{path:'/8093460',component:Path8093460},{path:'/5992600',component:Path5992600},{path:'/3440020',component:Path3440020},{path:'/8903460',component:Path8903460}]});var app=new Vue({el:'#app',router});