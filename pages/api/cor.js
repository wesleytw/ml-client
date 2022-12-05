import fetch from "isomorphic-unfetch";  //used for SSR

const Cors = async (req, res) => {
  const { url } = req.query;

  // 物件經過headers會變小寫所以是req.headers['content-type']，不是Content-Type(印出req.headers可知)
  // 直接用上一層fetch的req.headers去fetch會出現ＳＳＬ錯誤
  /* default config */
  let configs = {
    'Content-Type': 'application/json'
  }
  /* default config */

  /* 過濾出是gofact的fetch，加上api key */
  if (req.headers['gofact-api-token'] !== undefined) {
    configs.additem = req.headers['gofact-api-token']
  }
  /* 過濾出是gofact的fetch，加上api key */

  try {
    const resProxy = await fetch(url
      , {
        method: req.method,
        headers: configs,
        // body: JSON.stringify(req.body),
        redirect: 'follow'
      }
    );
    res.status(200).send(resProxy.body);
  } catch (error) {
    res.status(400).send(error.toString());
  }
};

export default Cors;



