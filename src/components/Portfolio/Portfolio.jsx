import React from "react";
import "./Portfolio.css";
import { Box, Card, CardContent, Typography, CardActions } from "@mui/material";
import Im from "../../Assets/Generater.jpg";
import VDF from "../../Assets/vdf.png";

import Ct from "../../Assets/portfolio.png";
import gpt from "../../Assets/gpt3.jpg";
import airpods from "../../Assets/Airpods.jpg";
import crypto from "../../Assets/crypto.png";

const boxstyle = {
  height: "100%",
  color: "white",
  backgroundColor: "#2c2c6c",
};

function Portfolio() {
  return (
    <section id="portfolio" data-aos="fade-up" data-aos-duration="3000">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio_cards">
        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img src={Im} alt="" className="portfolio_img" />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                Artificial Intelligence Based Image Generator
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/Shivansh-soni/Image-Generator"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://image-ss.netlify.app/"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img
                src={gpt}
                alt=""
                className="portfolio_img"
                overflow="hidden"
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                Modern UI/UX based GPT-3 Website
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/Shivansh-soni/GPT3"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://gpt3-ss.netlify.app/"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img src={VDF} alt="" className="portfolio_img" />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                Vehicle DocFoo - for all your vehicle needs
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/Shivansh-soni/Vehicle-DocFoo"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a href="https://vdf.netlify.app/" className="btn btn-primary">
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img src={Ct} alt="" className="portfolio_img" />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                HTML , CSS , JavaScript Based Portfolio Website
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/Shivansh-soni/Portfolio"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://portfolio1-ss.netlify.app/"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img
                src={airpods}
                alt=""
                height="191"
                className="portfolio_img"
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                Fancy Animation Web-app
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/Shivansh-soni/Fancy-scroll-airpods"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://master--airpods-scroll-animation.netlify.app/"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img src={crypto} alt="" className="portfolio_img" />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                Cryptoverse - All-in-one Crypto App
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/Shivansh-soni/Cryptoverse"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://crypto-ss.netlify.app/"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
      </div>
    </section>
  );
}

export default Portfolio;
