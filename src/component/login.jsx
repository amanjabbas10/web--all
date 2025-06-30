const Login = () => {
  return (
    <div className="div--23">
      <a href="/login2">back</a>
      <div className="login---2">
        <h1>دروستکردنی هەژمار</h1>
        <p>زانیاریەکانت پڕ بکەرەوە بۆ بەردەوام بوون</p>
        <hr />
        <label className="lab-2">ناو</label>
        <br />
        <input dir="rtl" type="text" placeholder=" ناوبە زمانی کوردی بنوسە" />
        <br />
        <lable className="lab-2">هەژماری ئەلیکترۆنی</lable>
        <br />
        <input
          dir="rtl"
          type="e-mail"
          placeholder="  هەژماری ئەلیکترۆنیت بنوسە"
        />
        <br />
        <lable className="lab-2">وشەی نهێنی</lable>
        <br />
        <input dir="rtl" type="password" placeholder=" وشەی نهێنی بنوسە" />
        <br />
        <label className="lab-2">دووپاتکردنەوەی وشەی نهێنی</label>
        <br />
        <input
          dir="rtl"
          type="text"
          placeholder=" دووپاتکردنەوەی وشەی نهێنی بنوسە"
        />
        <br />
        <br />
        <button className="btn---3">
          <a href="/login">دروستکردنی هەژمار</a>
        </button>
        <br />
        <button className="btn---2">
          <a href="/login2">چوونەژوورەوە</a>
        </button>
      </div>
    </div>
  );
};

export default Login;
