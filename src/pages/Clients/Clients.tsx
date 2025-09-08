import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { PageWrapper, ButtonControl } from "./styles";
import { Link } from "react-router-dom";
import { Page, Title, List, ClientLink } from "./styles";
import { type Company } from "./types";

const companies: Company[] = [
  { name: "Facebook", path: "facebook" },
  { name: "Google", path: "google" },
  { name: "Amazon", path: "amazon" },
];

function Clients() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      Information about company
      <Page>
        <Title>Our Clients</Title>
        <List>
          {companies.map((company) => (
            <ClientLink key={company.path} to={`/clients/${company.path}`}>
              {company.name}
            </ClientLink>
          ))}
        </List>
      </Page>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Clients;
