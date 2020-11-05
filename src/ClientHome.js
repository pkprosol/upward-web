import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import fetch from "node-fetch";

const ClientHome = () => {
  let { name } = useParams();

  const [token, setToken] = useState();
  const [agreedToTerms, setAgreedToTerms] = useState();
  const [agreedToPrivacy, setAgreedToPrivacy] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_UPWARD_API_URL}/pinwheel-link`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setToken(json.data.token);
      });
  }, []);

  const canContinue = agreedToTerms && agreedToPrivacy;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Upward</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: 30 }} maxWidth="sm">
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <img src="/upward-logo.png" alt="logo" width="100" />
        </div>
        <Typography variant="h6" gutterBottom>
          Connect Payroll
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {name.toUpperCase()} works with Upward to have your bills paid
          automatically from your paycheck.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Your payments will be sent by direct deposit, with the remaining
          amount continuing to go to your primary bank account.
        </Typography>
        <Box mt={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                name="terms"
              />
            }
            label={
              <p>
                I agree to the <a href="/terms">Terms of Use</a>
              </p>
            }
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreedToPrivacy}
                onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                name="privacy"
              />
            }
            label={
              <p>
                I agree to the{" "}
                <a href="/">Privacy Policy and Electronic Disclosure</a>
              </p>
            }
          />
        </Box>
        {token && (
          <Box display="flex" justifyContent="center" mt={5}>
            <Button
              disabled={!canContinue}
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => {
                const Pinwheel = window.Pinwheel;

                Pinwheel.open({
                  linkToken: token,
                  onSuccess: (result) => {
                    window.location.href = `${process.env.REACT_APP_CLIENT_URL}/success`;
                  },
                });
              }}
            >
              Continue
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
};

export default ClientHome;
