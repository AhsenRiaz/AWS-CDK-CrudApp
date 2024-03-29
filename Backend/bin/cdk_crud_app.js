#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const cdk_crud_app_stack_1 = require("../lib/cdk_crud_app-stack");
const app = new cdk.App();
new cdk_crud_app_stack_1.CdkCrudAppStack(app, 'CdkCrudAppStack');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrX2NydWRfYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrX2NydWRfYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMsa0VBQTREO0FBRTVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQUksb0NBQWUsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7IENka0NydWRBcHBTdGFjayB9IGZyb20gJy4uL2xpYi9jZGtfY3J1ZF9hcHAtc3RhY2snO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IENka0NydWRBcHBTdGFjayhhcHAsICdDZGtDcnVkQXBwU3RhY2snKTtcbiJdfQ==