import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
} from "@material-ui/core";

const Terms = ({ onAccept }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Upward</Typography>
        <Box ml={3}>
          <Typography variant="subtitle1">Terms and Conditions</Typography>
        </Box>
      </Toolbar>
    </AppBar>
    <Container style={{ marginTop: 30 }} maxWidth="sm">
      <Typography variant="subtitle1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Box display="flex" justifyContent="center" mt={5}>
        <Button onClick={onAccept} variant="contained" color="secondary">
          Accept Terms and Conditions
        </Button>
      </Box>
    </Container>
  </>
);

export default Terms;
