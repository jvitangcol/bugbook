"use client";

import { User, Session } from "lucia";
import { createContext } from "react";

interface SessionContext {
  user: User;
  session: Session;
}

const SessionContext = createContext<SessionContext | null>(null);
