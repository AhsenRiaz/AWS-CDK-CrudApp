#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkCrudAppStack } from '../lib/cdk_crud_app-stack';

const app = new cdk.App();
new CdkCrudAppStack(app, 'CdkCrudAppStack');
