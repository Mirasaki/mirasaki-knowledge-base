import { useRouter } from "next/router";
import { Button } from "nextra/components";

const GoBackButton = () => {
  const router = useRouter();
  return (<div style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3.5rem'
  }}>
    <Button onClick={() => router.back()} style={{
      padding: '.75rem 3rem',
    }}>
      Go Back
    </Button>
  </div>)
};

export default GoBackButton;
