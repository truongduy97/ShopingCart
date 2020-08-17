import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Box,
  Typography
} from "@material-ui/core/";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
const useStyles = makeStyles(theme => ({
  bg_footer: {
    backgroundColor: theme.palette.theme_color_one.main,
    color: theme.palette.theme_color_one.light
  },
  color_White: {
    color: "white"
  },
  mar: {
    margin: "15px"
  },
  mtb: {
    margin: "20px 0"
  },
  bg_footer_bot: {
    backgroundColor: theme.palette.theme_color_one.dark,
    color: theme.palette.theme_color_one.light
  },
  img_footer: {
    width: "25%",
    margin: "5px"
  }
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.bg_footer} px={5}>
        <Grid container>
          <Grid item sm={6} md={3} xs={12}>
            <Box p={4} dispaly="flex" justifyContent="center">
              <Typography className={classes.color_White} variant="h4">
                Shopping Cart
              </Typography>
              <Typography className={classes.mtb} variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus beatae facilis soluta sint nostrum, quibusdam saepe
                deleniti laborum culpa nobis.
              </Typography>
              <Box className={classes.color_White}>
                <FacebookIcon className={classes.mar} />
                <TwitterIcon className={classes.mar} />
                <InstagramIcon className={classes.mar} />

                <YouTubeIcon className={classes.mar} />
              </Box>
            </Box>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Box px={7} py={5}>
              <Typography variant="h6">ADDITIONAL LINKS</Typography>
              <Box my={1}>Home</Box>
              <Box my={1}> Products</Box>
              <Box my={1}>Cart</Box>
              <Box my={1}>About Us</Box>
              <Box my={1}>Contact</Box>
            </Box>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Box p={5}>
              <Typography variant="h6">CONTACT INFO</Typography>
              <Box my={3}>
                POFO Design Agency 301 The Greenhouse, Custard Factory, London,
                E2 8DY.
              </Box>
              <Box my={3}>Email: sales@domain.com</Box>
              <Box my={3}>Phone: +44 (0) 123 456 7890</Box>
            </Box>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Box py={5}>
              <Typography variant="h6">IMAGES</Typography>
              <Box display="flex" flexWrap="wrap" p={2}>
                <img
                  className={classes.img_footer}
                  src="https://scontent.cdninstagram.com/v/t51.2885-15/29716155_646461779018392_1632824515853549568_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_ohc=QOoYeM4uvkMAX8P4zNM&_nc_ht=scontent.cdninstagram.com&oh=0727aa93b1fdde01333bb9871df6bd34&oe=5F5E2497"
                />
                <img
                  className={classes.img_footer}
                  src="https://scontent.cdninstagram.com/v/t51.2885-15/23279544_158758678193388_226828656104701952_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_ohc=8onCS27Lfm0AX9K8hE7&_nc_ht=scontent.cdninstagram.com&oh=b1a020d6c5a322bc517db13d39feb327&oe=5F5E8502"
                />
                <img
                  className={classes.img_footer}
                  src="https://scontent.cdninstagram.com/v/t51.2885-15/23347822_375297079580177_9172549431143170048_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=r8Tl1uPeS4IAX_Oj1Ks&_nc_ht=scontent.cdninstagram.com&oh=fa31a1df192d57bc628e427a937ddc5d&oe=5F603344"
                />
                <img
                  className={classes.img_footer}
                  src="https://scontent.cdninstagram.com/v/t51.2885-15/23347549_2031947513708234_7051271749438013440_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_ohc=1fQ2rfIGqt4AX_75jzw&_nc_ht=scontent.cdninstagram.com&oh=13e50ad8d135576e607931622d6a801c&oe=5F61A4D0"
                />
                <img
                  className={classes.img_footer}
                  src="https://scontent.cdninstagram.com/v/t51.2885-15/23347633_138127380171820_8882548789731131392_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=MFcxiNjgONYAX-uX_Y8&_nc_ht=scontent.cdninstagram.com&oh=5d2d1c863eae5cf5e0a314c99073aca1&oe=5F60966F"
                />
                <img
                  className={classes.img_footer}
                  src="https://scontent.cdninstagram.com/v/t51.2885-15/23279737_533587690319682_4370340926912987136_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_ohc=gn_nQirn7T8AX_aF616&_nc_ht=scontent.cdninstagram.com&oh=f6837794067fa84ffbf541a4aed6f482&oe=5F5DD37A"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.bg_footer_bot} py={3}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="flex-start" px={4}>
              © 2019 POFO is Proudly Powered by ThemeZaa
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="flex-end" px={4}>
              Term and Condition | Privacy Policy
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default Footer;
