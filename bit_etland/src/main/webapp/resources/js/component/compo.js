var compo = compo || {}
compo = {
	cust_login_form : ()=>{
		return '<h2>로그인</h2>'
			+'	<form>'
			+'  <div class="imgcontainer">'
			+'  <img src="img_avatar2.png" alt="Avatar" class="avatar" >'
			+'  </div>'
			+'  <div class="container">'
			+' 	<img src="https://i.stack.imgur.com/l60Hf.png" style = width:50%><br>'
			+'  <label for="uname"><b>아이디</b></label>'
			+'  <input type="text" placeholder="Enter Username" name="uname" value="aguero" "required">'
			+'  <label for="psw"><b>비밀번호</b></label>'
			+'  <input type="password" placeholder="Enter Password" name="psw" value="1234" "required">'
			+'  <br><button type="submit">Login</button>'
			+'  <label>'
			+'  <input type="checkbox" checked="checked" name="remember"> "아이디 저장"'
			+'  </label>'
			+'  </div>'
			+'  <div class="container" style="background-color:#f1f1f1">'
			+'  <button type="button" class="cancelbtn">Cancel</button>'
			+'  <span class="psw">Forgot <a href="#">password?</a></span>'
			+'  </div>'
			+'	</form>'},
	cust_join_form : ()=>{
		return '<form style="border:1px solid #ccc">'
			+'  <div class="container">'
			+'  <h1>Sign Up</h1>'
			+'  <p>Please fill in this form to create an account.</p>'
			+'  <hr>'
			+'  <label><b>ID</b></label>'
			+'  <input type="text" placeholder="EnterID" name="id" value="lee gang in" "required"><br>'
			+'	<label><b>NAME</b></label>'
			+'  <input type="text" placeholder="EnterNAME" name="name" value="lee gang in" "required"><br>'
			+'  <label><b>Password</b></label>'
			+'  <input type="text" placeholder="EnterPassword" name="password" value="1234" "required"><br>'
			+'  <label><b>ssn</b></label>'
			+'  <input type="text" placeholder="EnterSSN" name="ssn" value="960111-1" "required"><br>'
			+'  <label><b>photo</b></label>'
			+'  <input type="text" placeholder="EnterPhoto" name="photo" value="default" "required"><br>'
			+'  <label><b>phone</b></label>'
			+'  <input type="text" placeholder="EnterPhone" name="phone" value="01012341111" "required"><br>'
			+'  <label><b>city</b></label>'
			+'  <input type="text" placeholder="EnterCity" name="city" value="부산" "required"><br>'
			+'  <label><b>address</b></label>'
			+'  <input type="text" placeholder="EnterAddress" name="address" value="학익동" "required"><br>'
			+'  <label><b>postalcode</b></label>'
			+'  <input type="text" placeholder="EnterPostalcode" name="postalcode" value="234" "required"><br>'
			+'  <label>'
			+'  <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px">Remember me'
			+'  </label>'
			+'  <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
			+'  <div class="clearfix">'
			+'  <button type="button" class="cancelbtn">Cancel</button>'
			+'  <button type="submit" class="signupbtn">Sign Up</button>'
			+'  </div>'
			+'  </div>'
			+'	</form>'},
			
	emp_access_form : ()=>{
		return '<h2>Login Form</h2>'
			+'  <form action="/action_page.php">'
			+'  <div class="imgcontainer">'
			+'  <img src="img_avatar2.png" alt="Avatar" class="avatar">'
			+'  </div>'
			+'  <div class="container">'
		/*	+'  <label for="employeeID"><b>EMPLOYEEID</b></label>'
			+'  <input type="text" placeholder="****" name="emp_no" id="emp_no" "required">'
			+'  <label for="name"><b>NAME</b></label>'
			+'  <input type="text" placeholder="****" name="name" id="name" "required">'*/
			+'  <button type="submit" id="access_btn">ACCESS</button>'
			+'  <label>'
			+'  <input type="checkbox" checked="checked" name="remember"> "Remember me"'
			+'  </label>'
			+'  </div>'
			+'  <div class="container" style="background-color:#f1f1f1">'
			+'  <button type="button" class="cancelbtn">Cancel</button>'
			+'  <span class="psw">Forgot <a href="#">password?</a></span>'
			+'  </div>'
			+'  </form>'},
			
	emp_login_form : ()=>{
			return '<h2>Login Form</h2>'
			+'  <form action="/action_page.php">'
			+'  <div class="imgcontainer">'
			+'  <img src="img_avatar2.png" alt="Avatar" class="avatar">'
			+'  </div>'
			+'  <div class="container">'
			+'  <label for="employeeID"><b>EMPLOYEEID</b></label>'
			+'  <input type="text" name="emp_no" id="emp_no" "required">'
			+'  <label for="name"><b>NAME</b></label>'
			+'  <input type="text" name="name" id="name" "required">'
			+'  <button type="submit" id="access_btn">ACCESS</button>'
			+'  <label>'
			+'  <input type="checkbox" checked="checked" name="remember"> "Remember me"'
			+'  </label>'
			+'  </div>'
			+'  <div class="container" style="background-color:#f1f1f1">'
			+'  <button type="button" class="cancelbtn">Cancel</button>'
			+'  <span class="psw">Forgot <a href="#">password?</a></span>'
			+'  </div>'
			+'  </form>'
			},
	emp_register_form : ()=>{
		return '<form style="border:1px solid #ccc">'
			+'  <div class="container">'
			+'  <h1>Sign Up</h1>'
			+'  <p>Please fill in this form to create an account.</p>'
			+'  <hr>'
            +'  <label for="employeeID"><b>EMPLOYEE ID</b></label>'
            +'  <input type="text" placeholder="Enter employeeID" name="employeeID" "required"><br>'
            +'  <label for="manager"><b>MANAGER</b></label>'
            +'  <input type="text" placeholder="Enter manager" name="manager" "required"><br>'
            +'  <label for="name"><b>NAME</b></label>'
            +'  <input type="text" placeholder="Repeat name" name=" "name" "required"><br>'
            +'  <label for="birthDate"><b>BIRTHDATE</b></label>'
            +'  <input type="text" placeholder="Enter birthDate" name="birthDate" "required"><br>'
            +'  <label for="photo"><b>PHOTO</b></label>'
            +'  <input type="text" placeholder="Enter photo" name="photo" "required"><br>'
            +'  <label for="notes"><b>NOTES</b></label>'
            +'  <input type="text" placeholder="Enter notes" name="notes" "required"><br>'
			+'  <label>'
			+'  <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me'
			+'  </label>'
			+'  <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
			+'  <div class="clearfix">'
			+'  <button type="button" class="cancelbtn">Cancel</button>'
			+'  <button type="submit" class="signupbtn">REGISTER</button>'
			+'  </div>'
			+'  </div>'
			+'  </form>'},
	cust_mypage : ()=>{
		return '<div class="w3-light-grey">'
            +	'<!-- Page Container -->'
            +'<div class="w3-content w3-margin-top" style="max-width:1400px;">'
            +'<!-- The Grid -->'
            +'<div class="w3-row-padding">'
            +'<!-- Left Column -->'
            +'<div class="w3-third">'
            +'<div class="w3-white w3-text-grey w3-card-4">'
            +'<div class="w3-display-container">'
            +'<img src="/w3images/avatar_hat.jpg" style="width:100%" alt="Avatar">'
            +'<div class="w3-display-bottomleft w3-container w3-text-black">'
            +'<h2>전서우</h2>'
            +'</div>'
            +'</div>'
            +'<div class="w3-container">'
            +'<p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>'
            +'<p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>'
            +'<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>'
            +'<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>'
          	+'<hr>'
          	+'<p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>'
          	+'<p>Adobe Photoshop</p>'
          	+'<div class="w3-light-grey w3-round-xlarge w3-small">'
            +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div>'
            +'</div>'
            +'<p>Photography</p>'
            +'<div class="w3-light-grey w3-round-xlarge w3-small">'
            +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%">'
            +'<div class="w3-center w3-text-white">80%</div>'
            +'</div>'
            +'</div>'
            +'<p>Illustrator</p>'
            +'<div class="w3-light-grey w3-round-xlarge w3-small">'
            +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div>'
            +'</div>'
            +'<p>Media</p>'
            +'<div class="w3-light-grey w3-round-xlarge w3-small">'
            +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div>'
            +'</div>'
            +'<br>'
            +'<p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>"Languages"</b></p>'
            +'<p>English</p>'
            +'<div class="w3-light-grey w3-round-xlarge">'
            +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>'
            +'</div>'
            +'<p>Spanish</p>'
            +'<div class="w3-light-grey w3-round-xlarge">'
            +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div>'
            +'</div>'
            +'<p>German</p>'
            +'<div class="w3-light-grey w3-round-xlarge">'
            +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>'
            +'</div>'
            +'<br>'
            +'</div>'
            +'</div><br>'
            +'<!-- End Left Column -->'
            +'</div>'
            +'<!-- Right Column -->'
            +'<div class="w3-twothird">'
            +'<div class="w3-container w3-card w3-white w3-margin-bottom">'
            +'  <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>'
            +'<div class="w3-container">'
            +'<h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>'
            +' <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>'
            +'  <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>'
            +'<hr>'
            +'</div>'
            +'<div class="w3-container">'
            +'<h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>'
            +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>'
            +' <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>'
            +'<hr>'
            +'</div>'
            +'<div class="w3-container">'
            +'<h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>'
            +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>'
            +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br>'
            +'</div>'
            +'</div>'
            +'<div class="w3-container w3-card w3-white">'
            +'  <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>'
            +'<div class="w3-container">'
            +'<h5 class="w3-opacity"><b>W3Schools.com</b></h5>'
            +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>'
            +'<p>Web Development! All I need to know in one place</p>'
            +'<hr>'
            +'</div>'
            +'<div class="w3-container">'
            +'<h5 class="w3-opacity"><b>London Business School</b></h5>'
            +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>'
            +'<p>Master Degree</p>'
            +'<hr>'
            +'</div>'
            +'<div class="w3-container">'
            +'<h5 class="w3-opacity"><b>School of Coding</b></h5>'
            +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>'
            +'<p>Bachelor Degree</p><br>'
            +'</div>'
            +'</div>'
            +'<!-- End Right Column -->'
            +'</div>'
            +'<!-- End Grid -->'
            +'</div>'
            +'<!-- End Page Container -->'
            +'</div>'
            +'<footer class="w3-container w3-teal w3-center w3-margin-top">'
            +'<p>Find me on social media.</p>'
            +'<i class="fa fa-facebook-official w3-hover-opacity"></i>'
            +'<i class="fa fa-instagram w3-hover-opacity"></i>'
            +'<i class="fa fa-snapchat w3-hover-opacity"></i>'
            +'<i class="fa fa-pinterest-p w3-hover-opacity"></i>'
            +'<i class="fa fa-twitter w3-hover-opacity"></i>'
            +'<i class="fa fa-linkedin w3-hover-opacity"></i>'
            +'<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>'
            +'</footer>'
            +''
            +''
            +'</div>'
			},
	carousel : ()=>{
		return '<div class="container">'
			+'<h2>Carousel Example</h2>'
			+'<div id="myCarousel" class="carousel slide" data-ride="carousel">'
			+'<!-- Indicators -->'
		    +'<ol class="carousel-indicators">'
		    +'<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
		    +'<li data-target="#myCarousel" data-slide-to="1"></li>'
		    +'<li data-target="#myCarousel" data-slide-to="2"></li>'
		    +'</ol>'
		    +'<!-- Wrapper for slides -->'
		    +'<div class="carousel-inner">'
		    +'<div class="item active">'
		    +'<img src="resources/img/la.jpg" alt="Los Angeles" style="width:100%;">'
		    +'<div class="carousel-caption">'
		    +'<h3>Los Angeles</h3>'
		    +'<p>LA is always so much fun!</p>'
		    +'</div>'
		    +'</div>'
		    +'<div class="item">'
		    +'<img src="resources/img/chicago.jpg" alt="Chicago" style="width:100%;">'
		    +'<div class="carousel-caption">'
		    +'<h3>Chicago</h3>'
		    +'<p>Thank you, Chicago!</p>'
		    +'</div>'
		    +'</div>'
		    +'<div class="item">'
	        +'<img src="resources/img/ny.jpg" alt="New York" style="width:100%;">'
	        +'<div class="carousel-caption">'
	        +'<h3>New York</h3>'
	        +'<p>We love the Big Apple!</p>'
	        +'</div>'
	        +'</div>'
		    +'</div>'
		    +'<!-- Left and right controls -->'
		    +'<a class="left carousel-control" href="#myCarousel" data-slide="prev">'
		    +'<span class="glyphicon glyphicon-chevron-left"></span>'
		    +'<span class="sr-only">Previous</span>'
		    +'</a>'
		    +'<a class="right carousel-control" href="#myCarousel" data-slide="next">'
		    +'<span class="glyphicon glyphicon-chevron-right"></span>'
		    +'<span class="sr-only">Next</span>'
			+'</a>'
			+'</div>'
			+'</div>'},
	cust_leave : ()=>{
		return '<form style="border:1px solid #ccc">'
			+'  <div class="container">'
			+'    <h1>회원탈퇴</h1>'
			+'    <p>Please fill in this form to leave an account.</p>'
			+'    <hr>'
			+'    <label><b>ID</b></label>'
			+'    <input type="text" placeholder="EnterID" name="id" value="lee gang in" "required"><br>'
			+'	  <label><b>NAME</b></label>'
			+'    <input type="text" placeholder="EnterNAME" name="name" value="lee gang in" "required"><br>'
			+'    <label><b>Password</b></label>'
			+'    <input type="text" placeholder="EnterPassword" name="password" value="1234" "required"><br>'
			+'    <label><b>ssn</b></label>'
			+'    <input type="text" placeholder="EnterSSN" name="ssn" value="960111-1" "required"><br>'
			+'    <label><b>photo</b></label>'
			+'    <input type="text" placeholder="EnterPhoto" name="photo" value="default" "required"><br>'
			+'    <label><b>phone</b></label>'
			+'    <input type="text" placeholder="EnterPhone" name="phone" value="01012341111" "required"><br>'
			+'    <label><b>city</b></label>'
			+'    <input type="text" placeholder="EnterCity" name="city" value="부산" "required"><br>'
			+'    <label><b>address</b></label>'
			+'    <input type="text" placeholder="EnterAddress" name="address" value="학익동" "required"><br>'
			+'    <label><b>postalcode</b></label>'
			+'    <input type="text" placeholder="EnterPostalcode" name="postalcode" value="234" "required"><br>'
			+'    <label>'
			+'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px">Remember me'
			+'    </label>'
			+'    <p>By leaving an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
			+'    <div class="clearfix">'
			+'      <button type="button" class="cancelbtn">Cancel</button>'
			+'      <button type="submit" class="signupbtn">Leave account </button>'
			+'    </div>'
			+'  </div>'
			+'</form>'},
	cust_update : ()=>{
		return '<form style="border:1px solid #ccc">'
			+'  <div class="container">'
			+'    <h1>회원정보수정</h1>'
			+'    <p>Please fill in this form to leave an account.</p>'
			+'    <hr>'
			+'    <label><b>ID</b></label>'
			+'    <input type="text" placeholder="EnterID" name="id" value="aguero" "required"><br>'
			+'    <label><b>Password</b></label>'
			+'    <input type="text" placeholder="EnterPassword" name="password" value="1234" "required"><br>'
			+'    <label><b>phone</b></label>'
			+'    <input type="text" placeholder="EnterPhone" name="phone" value="010-1234-5678" "required"><br>'
			+'    <label><b>city</b></label>'
			+'    <input type="text" placeholder="EnterCity" name="city" value="서울특별시 강남구 언주로30길 57" "required"><br>'
			+'    <label><b>address</b></label>'
			+'    <input type="text" placeholder="EnterAddress" name="address" value="타워팰리스 1004동 1004호" "required"><br>'
			+'    <label><b>postalcode</b></label>'
			+'    <input type="text" placeholder="EnterPostalcode" name="postalcode" value="06293" "required"><br>'
			+'    <label>'
			+'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px">Remember me'
			+'    </label>'
			+'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
			+'    <div class="clearfix">'
			+'      <button type="button" class="cancelbtn">Cancel</button>'
			+'      <button type="submit" class="updatebtn">Update</button>'
			+'    </div>'
			+'  </div>'
			+'</form>'},
	cust_basket : ()=>{
		return '<form style="border:1px solid #ccc">'
			+'  <div class="container">'
			+'    <h1>장바구니</h1>'
			+'    <p></p>'
			+'    <hr>'
			+'<img src="resources/img/2.jpg" alt="Los Angeles" style="width:20%;">'
			+'    <label>'
			+'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px">Remember me'
			+'    </label>'
			+'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
			+'    <div class="clearfix">'
			+'      <button type="button" class="cancelbtn">Cancel</button>'
			+'      <button type="submit" class="signupbtn">Leave account </button>'
			+'    </div>'
			+'  </div>'
			+'</form>'},
	cust_perchase : ()=>{
		return '<form style="border:1px solid #ccc">'
			+'  <div class="container">'
			+'    <h1>구매내역</h1>'
			+'    <p></p>'
			+'    <hr>'
			 +'<img src="resources/img/2.jpg" alt="Los Angeles" style="width:20%;">'
			+'    <label>'
			+'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px">Remember me'
			+'    </label>'
			+'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
			+'    <div class="clearfix">'
			+'      <button type="button" class="cancelbtn">Cancel</button>'
			+'      <button type="submit" class="signupbtn">Leave account </button>'
			+'    </div>'
			+'  </div>'
			+'</form>'},
	prod_post : ()=>{
		return '<div class="container">'
			+'<div class="form-group">'
			+'<label for="productName">상품명:</label>'
			+'<input type="text" class="form-control" id="productName" name="productName">'
			+'</div>'
			+'<div class="form-group">'
			+'<label for="pwd">가격:</label>'
			+'<input type="password" class="form-control" id="price" name="price">'
			+'</div>'
			+'<div class="checkbox">'
			+'<label><input type="checkbox" value="">블랙</label>'
			+'</div>'
			+'<div class="checkbox">'
			+'<label><input type="checkbox" value="">화이트</label>'
			+'</div>'
			+'<div class="checkbox disabled">'
			+'<label><input type="checkbox" value="" disabled>블루</label>'
			+'</div>'
			+'<div class="radio">'
			+'<label><input type="radio" name="supplierID" checked>삼성전자</label>'
			+'</div>'
			+'<div class="radio">'
			+'<label><input type="radio" name="optradio">Option 2</label>'
			+'</div>'
			+'<div class="radio disabled">'
			+'<label><input type="radio" name="optradio" disabled>Option 3</label>'
			+'</div>'
			+'<div class="form-group">'
			+'<label for="sel1">카테고리:</label>'
			+'<select class="form-control" id="sel1">'
			+'<option>1</option>'
			+'<option>2</option>'
			+'<option>3</option>'
			+'<option>4</option>'
			+'</select>'
			+'</div>'
			+'<p>생산년월: <input type="text" id="datepicker"></p>'
			+'<div class="form-group">'
			+'<label for="comment">상세설명:</label>'
			+'<textarea class="form-control" rows="5" id="comment"></textarea>'
			+'</div>'},
			prod_register : ()=>{
				
				/*
				 *  productID, productName, supplierID, categoryID,
	unit, price, productImage;
				 */
				return '<div class="col-md-8 order-md-1">'
				  +'<h4 class="mb-3">상품등록</h4>'
				  +'<form class="needs-validation" novalidate="">'
				+'<div class="row">'
				  +'<div class="col-md-6 mb-3">'
				+'<label for="firstName">카테고리</label>'
				+'<input type="text" class="form-control" id="firstName" placeholder="" value="스마트폰" required="">'
				+'<div class="invalid-feedback">'
				  +'Valid first name is required.'
				+'</div>'
				  +'</div>'
				  +'<div class="col-md-6 mb-3">'
				+'<label for="lastName">상품명</label>'
				+'<input type="text" class="form-control" id="lastName" placeholder="" value="" required="">'
				+'<div class="invalid-feedback">'
				  +'Valid last name is required.'
				+'</div>'
				  +'</div>'
				+'</div>'
				
				  +'</div>'
				+'</div>'
				+'<div class="mb-3">'
				  +'<label for="price">가격 <span class="text-muted">(Optional)</span></label>'
				  +'<input type="text" class="form-control" id="price" placeholder="가격(만원단위)">'
				  +'<div class="invalid-feedback">'
				+'가격입력'
				  +'</div>'
				+'</div>'
				
				+'<div class="row">'
				  +'<div class="col-md-5 mb-3">'
				+'<label for="country">공급업체</label>'
				+'<select class="custom-select d-block w-100" id="country" required="">'
				  +'<option value="">업체명</option>'
				  +'<option value="samsung">삼성전자</option>'
				  +'<option value="lge">LG전자</option>'
				  +'<option value="apple">애플</option>'
				  +'<option value="xiami">샤오미</option>'
				+'</select>'
				
				  +'</div>'
				
				+'<hr class="mb-4">'
				+'<div class="invalid-feedback">'
				  +'사은품 선택 (두가지 선택).'
				+'</div>'
				+'<div class="custom-control custom-checkbox">'
				  +'<input type="checkbox" class="custom-control-input" id="same-address">'
				  +'<label class="custom-control-label" for="same-address">필름</label>'
				+'</div>'
				+'<div class="custom-control custom-checkbox">'
				  +'<input type="checkbox" class="custom-control-input" id="same-address">'
				  +'<label class="custom-control-label" for="same-address">보조배터리</label>'
				+'</div>'
				+'<div class="custom-control custom-checkbox">'
				  +'<input type="checkbox" class="custom-control-input" id="same-address">'
				  +'<label class="custom-control-label" for="same-address">케이스</label>'
				+'</div>'
				
				+'<hr class="mb-4">'
				+'<h4 class="mb-3">색상선택</h4>'
				+'<div class="d-block my-3">'
				  +'<div class="custom-control custom-radio">'
				+'<input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">'
				+'<label class="custom-control-label" for="credit">화이트</label>'
				  +'</div>'
				  +'<div class="custom-control custom-radio">'
				+'<input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">'
				+'<label class="custom-control-label" for="debit">블랙</label>'
				  +'</div>'
				  +'<div class="custom-control custom-radio">'
				+'<input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">'
				+'<label class="custom-control-label" for="paypal">블루</label>'
				  +'</div>'
				+'</div>'
				+'<div class="row">'
				  +'<div class="col-md-6 mb-3">'
				+'<label for="cc-name">제품 설명</label>'
				+'<input type="textarea" class="form-control" id="cc-name" placeholder="" required="">'
				+'<small class="text-muted"></small>'
				+'<div class="invalid-feedback">'
				  +''
				+'</div>'
				  +'</div>'
				 
				+'</div>'
				+'<div class="row">'
				  +'<div class="col-md-3 mb-3">'
				+'<label for="cc-expiration">이미지등록(파일업로드)</label>'
				+'<input type="file" class="form-control" id="cc-expiration" placeholder="" required="">'
				+'<div class="invalid-feedback">'
				+'</div>'
				  +'</div>'
				  +'<div class="col-md-3 mb-3">'
				+'<label for="cc-cvv">이미지등록(드래그&드랍)</label>'
				+'<input type="file" class="form-control" id="cc-cvv" placeholder="" required="">'
				+'<div class="invalid-feedback">'
				+'</div>'
				  +'</div>'
				+'</div>'
				+'<hr class="mb-4">'
				+'<button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>'
				  +'</form>'
				+'</div>'	
				}
		/*prod_register : ()=>{
			return '<div class="col-md-8 order-md-1">'
			  +'<h4 class="mb-3">Billing address</h4>'
			  +'<form class="needs-validation" novalidate="">'
			+'<div class="row">'
			  +'<div class="col-md-6 mb-3">'
			+'<label for="firstName">First name</label>'
			+'<input type="text" class="form-control" id="firstName" placeholder="" value="" required="">'
			+'<div class="invalid-feedback">'
			  +'Valid first name is required.'
			+'</div>'
			  +'</div>'
			  +'<div class="col-md-6 mb-3">'
			+'<label for="lastName">Last name</label>'
			+'<input type="text" class="form-control" id="lastName" placeholder="" value="" required="">'
			+'<div class="invalid-feedback">'
			  +'Valid last name is required.'
			+'</div>'
			  +'</div>'
			+'</div>'
			+'<div class="mb-3">'
			  +'<label for="username">Username</label>'
			  +'<div class="input-group">'
			+'<div class="input-group-prepend">'
			  +'<span class="input-group-text">@</span>'
			+'</div>'
			+'<input type="text" class="form-control" id="username" placeholder="Username" required="">'
			+'<div class="invalid-feedback" style="width: 100%;">'
			  +'Your username is required.'
			+'</div>'
			  +'</div>'
			+'</div>'
			+'<div class="mb-3">'
			  +'<label for="email">Email <span class="text-muted">(Optional)</span></label>'
			  +'<input type="email" class="form-control" id="email" placeholder="you@example.com">'
			  +'<div class="invalid-feedback">'
			+'Please enter a valid email address for shipping updates.'
			  +'</div>'
			+'</div>'
			+'<div class="mb-3">'
			  +'<label for="address">Address</label>'
			  +'<input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">'
			  +'<div class="invalid-feedback">'
			+'Please enter your shipping address.'
			  +'</div>'
			+'</div>'
			+'<div class="mb-3">'
			  +'<label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>'
			  +'<input type="text" class="form-control" id="address2" placeholder="Apartment or suite">'
			+'</div>'
			+'<div class="row">'
			  +'<div class="col-md-5 mb-3">'
			+'<label for="country">Country</label>'
			+'<select class="custom-select d-block w-100" id="country" required="">'
			  +'<option value="">Choose...</option>'
			  +'<option>United States</option>'
			+'</select>'
			+'<div class="invalid-feedback">'
			  +'Please select a valid country.'
			+'</div>'
			  +'</div>'
			  +'<div class="col-md-4 mb-3">'
			+'<label for="state">State</label>'
			+'<select class="custom-select d-block w-100" id="state" required="">'
			  +'<option value="">Choose...</option>'
			  +'<option>California</option>'
			+'</select>'
			+'<div class="invalid-feedback">'
			  +'Please provide a valid state.'
			+'</div>'
			  +'</div>'
			  +'<div class="col-md-3 mb-3">'
			+'<label for="zip">Zip</label>'
			+'<input type="text" class="form-control" id="zip" placeholder="" required="">'
			+'<div class="invalid-feedback">'
			  +'Zip code required.'
			+'</div>'
			  +'</div>'
			+'</div>'
			+'<hr class="mb-4">'
			+'<div class="custom-control custom-checkbox">'
			  +'<input type="checkbox" class="custom-control-input" id="same-address">'
			  +'<label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>'
			+'</div>'
			+'<div class="custom-control custom-checkbox">'
			  +'<input type="checkbox" class="custom-control-input" id="save-info">'
			  +'<label class="custom-control-label" for="save-info">Save this information for next time</label>'
			+'</div>'
			+'<hr class="mb-4">'
			+'<h4 class="mb-3">Payment</h4>'
			+'<div class="d-block my-3">'
			  +'<div class="custom-control custom-radio">'
			+'<input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">'
			+'<label class="custom-control-label" for="credit">Credit card</label>'
			  +'</div>'
			  +'<div class="custom-control custom-radio">'
			+'<input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">'
			+'<label class="custom-control-label" for="debit">Debit card</label>'
			  +'</div>'
			  +'<div class="custom-control custom-radio">'
			+'<input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">'
			+'<label class="custom-control-label" for="paypal">PayPal</label>'
			  +'</div>'
			+'</div>'
			+'<div class="row">'
			  +'<div class="col-md-6 mb-3">'
			+'<label for="cc-name">Name on card</label>'
			+'<input type="text" class="form-control" id="cc-name" placeholder="" required="">'
			+'<small class="text-muted">Full name as displayed on card</small>'
			+'<div class="invalid-feedback">'
			  +'Name on card is required'
			+'</div>'
			  +'</div>'
			  +'<div class="col-md-6 mb-3">'
			+'<label for="cc-number">Credit card number</label>'
			+'<input type="text" class="form-control" id="cc-number" placeholder="" required="">'
			+'<div class="invalid-feedback">'
			  +'Credit card number is required'
			+'</div>'
			  +'</div>'
			+'</div>'
			+'<div class="row">'
			  +'<div class="col-md-3 mb-3">'
			+'<label for="cc-expiration">Expiration</label>'
			+'<input type="text" class="form-control" id="cc-expiration" placeholder="" required="">'
			+'<div class="invalid-feedback">'
			  +'Expiration date required'
			+'</div>'
			  +'</div>'
			  +'<div class="col-md-3 mb-3">'
			+'<label for="cc-cvv">CVV</label>'
			+'<input type="text" class="form-control" id="cc-cvv" placeholder="" required="">'
			+'<div class="invalid-feedback">'
			  +'Security code required'
			+'</div>'
			  +'</div>'
			+'</div>'
			+'<hr class="mb-4">'
			+'<button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>'
			  +'</form>'
			+'</div>'	
			}*/
}