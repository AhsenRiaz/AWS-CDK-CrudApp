"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("@aws-cdk/assert");
const cdk = require("@aws-cdk/core");
const CdkCrudApp = require("../lib/cdk_crud_app-stack");
test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkCrudApp.CdkCrudAppStack(app, 'MyTestStack');
    // THEN
    assert_1.expect(stack).to(assert_1.matchTemplate({
        "Resources": {}
    }, assert_1.MatchStyle.EXACT));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrX2NydWRfYXBwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGtfY3J1ZF9hcHAudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRDQUFpRjtBQUNqRixxQ0FBcUM7QUFDckMsd0RBQXdEO0FBRXhELElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQ3JCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFCLE9BQU87SUFDUCxNQUFNLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2pFLE9BQU87SUFDUCxlQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLHNCQUFhLENBQUM7UUFDaEMsV0FBVyxFQUFFLEVBQUU7S0FDaEIsRUFBRSxtQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDekIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHBlY3QgYXMgZXhwZWN0Q0RLLCBtYXRjaFRlbXBsYXRlLCBNYXRjaFN0eWxlIH0gZnJvbSAnQGF3cy1jZGsvYXNzZXJ0JztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIENka0NydWRBcHAgZnJvbSAnLi4vbGliL2Nka19jcnVkX2FwcC1zdGFjayc7XG5cbnRlc3QoJ0VtcHR5IFN0YWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG4gICAgLy8gV0hFTlxuICAgIGNvbnN0IHN0YWNrID0gbmV3IENka0NydWRBcHAuQ2RrQ3J1ZEFwcFN0YWNrKGFwcCwgJ015VGVzdFN0YWNrJyk7XG4gICAgLy8gVEhFTlxuICAgIGV4cGVjdENESyhzdGFjaykudG8obWF0Y2hUZW1wbGF0ZSh7XG4gICAgICBcIlJlc291cmNlc1wiOiB7fVxuICAgIH0sIE1hdGNoU3R5bGUuRVhBQ1QpKVxufSk7XG4iXX0=