const login2 = () => {
  return (
    <div>
      <a href="/">back</a>
      <div className="login">
        <h1>چوونەژوورەوە</h1>
        <p>زانیاریەکانت پڕ بکەرەوە</p>
        <hr />
        <lable className="lab-2">هەژماری ئەلیکترۆنی</lable>
        <br />
        <input dir="rtl" type="text" placeholder="هەژماری ئەلیکترۆنی" />
        <br />
        <lable style={{ marginLeft: "6rem" }} className="lab-2">
          وشەی نهێنی
        </lable>
        <br />
        <input dir="rtl" type="password" placeholder="وشەی نهێنی" />
        <br />
        <a href="#">وشەی نهێنیت لەبیر کردووە؟</a>
        <br />
        <br />
        <button className="btn---30">
          <a href="/">چوونەژوورەوە</a>
        </button>
        <br />
        <button className="btn---20">
          <a href="/login">دروستکردنی هەژمار</a>
        </button>
      </div>
    </div>
  );
};

export default login2;
