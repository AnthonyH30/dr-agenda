"use client";
import { Plus } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import UpsertDoctorForm from "./upsert-doctor-form";

export default function AddDoctorButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <Plus /> Adicionar médico
        </Button>
      </DialogTrigger>
      <UpsertDoctorForm />
    </Dialog>
  );
}
