// import fetch from "isomorphic-unfetch";  //used for SSR

const Cors = async (req, res) => {
  const { url } = req.query;

  // 物件經過headers會變小寫所以是req.headers['content-type']，不是Content-Type(印出req.headers可知)
  // 直接用上一層fetch的req.headers去fetch會出現ＳＳＬ錯誤
  /* default config */
  let header = {
    'Content-Type': 'application/json'
  }
  /* default config */

  try {
    console.log("bb",url,req.body)
    const resProxy = await fetch(url
      , {
        method: req.method,
        headers: header,
        body: JSON.stringify(req.body),
        redirect: 'follow'
      }
    );
    res.status(200).send(resProxy.body);
  } catch (error) {
    res.status(400).send(error.toString());
  }
};

export default Cors;



