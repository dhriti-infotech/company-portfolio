import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets/logo.png';
import Services from './Services';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import "../Styles/common.css";


const drawerWidth = 240;
const navItems = ['home', 'services', 'contact'];
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));
const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });


function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);  

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (section) => {
    setActiveItem(section);
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Drithi Infotech
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
                sx={{
                    textAlign: 'center',
                    backgroundColor: activeItem === item ? 'rgba(0, 33, 71, 0.1)' : 'transparent',
                }}
                onClick={() => handleNavClick(item)}
            >
                <ListItemText primary={item.toUpperCase()} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  useEffect(() => {
    const scrollTarget = window !== undefined ? window() : globalThis;

    const handleScroll = () => {
        if (scrollTarget.scrollY > 300) {
            setShowScrollTop(true);
        } else {
            setShowScrollTop(false);
        }
    };

    scrollTarget.addEventListener('scroll', handleScroll);
    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, [window]);

  return (
    <Box sx={{ display: 'flex',width:"100%" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{background:"#002147 !important"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
            component="img"
            src={logo}
            alt="Driti Infotech Logo"
            sx={{
                height: 40,
                width: 'auto',
                mr: 1,
            }}
            />
            <Typography
                variant="h6"
                noWrap
                component="div"
            >
            Driti Infotech
            </Typography>
        </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button
                key={item}
                onClick={() => handleNavClick(item)}
                disableRipple
                sx={{
                    color: '#fff',
                    position: 'relative',
                    mx: 1,
                    outline: 'none',
                    '&:focus': {
                        outline: 'none',
                    },
                    '&:focus-visible': {
                        outline: 'none',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: activeItem === item ? '100%' : '0%',
                        height: '2px',
                        backgroundColor: 'cyan',
                        transition: 'width 0.3s ease-in-out',
                    },
                }}
                >
                {item}
                </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box  sx={{display:"flex", width:"100%", flexDirection:"column"}}>        
        <Box id="home" sx={{ p: 3, width:"100%", height:"100%"}}>
          <Toolbar />
          <Services sx={{width:"100%", height:"80%"}}/>
        </Box><br/>
        <Box id="services" sx={{ p: 3, width:"100%", marginTop:"-15%"}}>                  
          <Toolbar />
          <Paper elevation={20} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>Services We Offer</Typography>
            
            <Paper className='paper1' elevation={29} sx={{padding:"10px"}}>
              {/* Outsourcing & Offshoring Consulting */}
              <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>
                Outsourcing & Offshoring Consulting
              </Typography>
              <Typography variant="body1" paragraph>
                At Driti Infotech, we understand that efficiency, scalability, and cost optimization are vital for business growth. Our Outsourcing & Offshoring Consulting services help companies streamline operations by connecting them with the right talent and processes across global markets. Whether you're looking to expand your development team, delegate routine tasks, or tap into specialized expertise, we help you design an outsourcing model that aligns with your strategic goals.
              </Typography>
              <Typography variant="body1" paragraph>
                We don’t believe in one-size-fits-all. Our consultants work closely with you to assess business functions, identify outsourcing opportunities, and navigate regulatory and compliance landscapes. With a strong focus on quality, security, and ROI, we enable you to stay competitive in a fast-evolving global economy—all while reducing overhead and gaining operational agility.
              </Typography>
            </Paper>

            <Divider sx={{ my: 3 }} />
            <Paper className='paper1' elevation={29} sx={{padding:"10px"}}>
              {/* Web Page Development */}
              <Typography variant="h5" sx={{overflowWrap:'anywhere'}} gutterBottom>
                Web Development
              </Typography>
              <Typography variant="body1" paragraph>
                Your website is your first impression—and we make sure it’s a lasting one. At Driti Infotech, our Web Page Development service blends intuitive UI/UX design with powerful backend functionality. We craft responsive, SEO-optimized, and mobile-ready websites that look stunning on every device and load in seconds.
              </Typography>
              <Typography variant="body1" paragraph>
                Whether you're launching a startup or rebranding an enterprise, we develop scalable websites using the latest frameworks (React, Next.js, etc.) with customized integrations for CRMs, analytics, and ecommerce platforms. The result? A user experience that drives engagement, builds trust, and turns visitors into loyal customers.
              </Typography>
            </Paper>
            
            <Divider sx={{ my: 3 }} />
            <Paper className='paper1' elevation={29} sx={{padding:"10px"}}>
              {/* App Development */}
              <Typography variant="h5"sx={{overflowWrap:"break-word"}}  gutterBottom>
                App Development
              </Typography>
              <Typography variant="body1" paragraph>
                Transform your ideas into powerful mobile experiences with our end-to-end App Development services. From native iOS and Android apps to cross-platform solutions using Flutter or React Native, we build high-performance apps tailored to your business needs.
              </Typography>
              <Typography variant="body1" paragraph>
                Our process doesn’t stop at launch. We provide ongoing support, updates, and analytics to help your app evolve with your audience. Whether it’s a B2C marketplace, internal enterprise tool, or IoT companion app—we deliver clean, scalable code and experiences users love.
              </Typography>
            </Paper>
            
            <Divider sx={{ my: 3 }} />
            <Paper className='paper1' elevation={29} sx={{padding:"10px"}}>
              {/* Cloud Solutions for IoT */}
              <Typography variant="h5" gutterBottom>
                Cloud Solutions for IoT
              </Typography>
              <Typography variant="body1" paragraph>
                The future of connectivity is here—and we help you harness it. Driti Infotech specializes in Cloud Solutions for IoT that bring intelligence, automation, and control to your devices. From smart home systems to industrial automation, our cloud platforms enable secure, scalable communication between your hardware and applications.
              </Typography>
              <Typography variant="body1" paragraph>
                We integrate with AWS IoT, Azure, or private clouds to deliver real-time data analytics, remote monitoring, and seamless device provisioning. With our solutions, you can cut latency, improve decision-making, and launch IoT products faster—all while ensuring enterprise-grade security and compliance.
              </Typography>
            </Paper>
            
            <Divider sx={{ my: 3 }} />
            <Paper className='paper1' elevation={29} sx={{padding:"10px"}}>
              {/* AOP Authorization Frameworks */}
              <Typography variant="h5" gutterBottom>
                AOP Authorization Frameworks
              </Typography>
              <Typography variant="body1" paragraph>
                Authorization should be smart, modular, and flexible—exactly what our AOP (Aspect-Oriented Programming) Authorization Frameworks deliver. Designed for enterprises that need robust access control without bloating application logic, our solution decouples authorization concerns from your business code.
              </Typography>
              <Typography variant="body1" paragraph>
                With our AOP-based approach, you gain centralized policy management, role-based access control (RBAC), and dynamic rule enforcement—all without compromising performance. Whether you’re building enterprise APIs, multi-tenant applications, or microservices, our framework scales with you and ensures your data is protected at every layer.
              </Typography>
            </Paper>
            
            <Divider sx={{ my: 3 }} />
            <Paper className='paper1' elevation={29} sx={{padding:"10px"}}>
              {/* HR Portals & Employee Engagement Tools */}
              <Typography variant="h5" gutterBottom>
                HR Portals & Employee Engagement Tools
              </Typography>
              <Typography variant="body1" paragraph>
                Empower your workforce with intelligent HR Portals and Employee Engagement Tools that drive productivity and retention. At Driti Infotech, we build custom HR platforms that handle everything from onboarding and payroll to performance management and internal communication.
              </Typography>
              <Typography variant="body1" paragraph>
                But we don’t stop at HR automation. We integrate pulse surveys, recognition tools, and gamification features to boost engagement and morale. Whether you have a growing startup or a multinational team, our solutions help you create a connected, motivated, and high-performing workplace.
              </Typography>
            </Paper>
          </Paper>
        </Box>

        <Box id="contact" sx={{ p: 3, width: "100%" }}>
          <Toolbar />
          <Paper elevation={20} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>Contact Us</Typography>

            <Paper className='paper1' elevation={29} sx={{ padding: "10px" }}>
              {/* Email Contact */}
              <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>
                📧 Get in Touch via Email
              </Typography>
              <Typography variant="body1" sx={{overflowWrap:"break-word"}} paragraph>
                For project inquiries, support, or general questions, feel free to drop us an email at:  
                <a href="mailto:infotech.dhriti@gmail.com" style={{ color: 'blue', textDecoration: 'underline' }}>
                  infotech.dhriti@gmail.com
                </a>  
                We strive to respond within 24 hours and look forward to collaborating with you!
              </Typography>

              {/* LinkedIn Contact */}
              <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>
                🔗 Connect with Us on LinkedIn
              </Typography>
              <Typography variant="body1" sx={{overflowWrap:"break-word"}} paragraph>
                Stay updated on our latest projects, insights, and technology solutions by connecting with us on LinkedIn.  
                <a href="https://www.linkedin.com/company/dhriti-infotech" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
                  linkedin.com/company/dhriti-infotech
                </a>
                Let's build a strong professional network and explore opportunities together.
              </Typography>
            </Paper>
          </Paper>
        </Box>

      </Box>
        {showScrollTop && (
            <Button
                variant="contained"
                onClick={() => {
                    const scrollTarget = window !== undefined ? window() : globalThis;

                    scrollTarget.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                backgroundColor: '#002147 !important',
                color: 'white',
                borderRadius: '50%',
                minWidth: 48,
                height: 48,
                fontSize: 24,
                zIndex: 9999,
                '&:hover': {
                    backgroundColor: '#002147 !important',
                },
                }}
            >
                ↑
            </Button>
        )}
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
