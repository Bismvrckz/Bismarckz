import { Button, Grid } from "@nextui-org/react";

export function Defaultbutton({ text, size }) {
  return (
    <Grid>
      <Button shadow color="primary" size={size} auto>
        {text}
      </Button>
    </Grid>
  );
}
