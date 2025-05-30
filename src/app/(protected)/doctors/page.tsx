import { Plus } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";

export default function DoctorsPage() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Médicos</PageTitle>
          <PageDescription>
            Access a detailed overview of key metrics and patient outcomes
          </PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button>
            <Plus /> Adicionar médico
          </Button>
        </PageActions>
      </PageHeader>
    </PageContainer>
  );
}
