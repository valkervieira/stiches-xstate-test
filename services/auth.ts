import { interpret } from 'xstate';
import { authenticationMachine as authMachine } from '@machines/auth';

export const authService = interpret(authMachine);

authService.start();
