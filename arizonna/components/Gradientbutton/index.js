import { Button, Grid } from "@nextui-org/react";

export function Gradientbutton({ text, size }) {
  return (
    <Grid>
      <Button shadow color="gradient" size={size} auto>
        {text}
      </Button>
    </Grid>
  );
}
