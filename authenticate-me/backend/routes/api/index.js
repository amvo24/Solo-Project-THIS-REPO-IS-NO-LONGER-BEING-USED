const router = require('express').Router();
// GET /api/restore-user
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require('../../utils/auth.js');


router.use(restoreUser);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
~
//-------------------------------------------------
router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
  });
//-------------------------------------------------
// router.get('/restore-user',(req, res) => {
//     return res.json(req.user);
//   }
// );
//-------------------------------------------------
// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
// });
//-------------------------------------------------
// // GET /api/set-token-cookie
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
//-------------------------------------------------
// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// });

module.exports = router;
