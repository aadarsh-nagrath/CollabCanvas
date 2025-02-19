import {v} from "convex/values";
import {mutation, query} from "./_generated/server";
import {Doc, Id} from  "./_generated/dataModel";

export const getSidebar = query({
    args: {
        parentDocument: v.optional(v.id("documents")),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if(!identity) {
            throw new Error("User not logged in");
        }

        const userId = identity.subject;

        //fetch documents using indexes
    }
});


// export const get = query({
//     handler: async (ctx) => {
//         const identity = await ctx.auth.getUserIdentity();
//         if(!identity) {
//             throw new Error("User not logged in");
//         }
//         const document = await ctx.db.query("documents").collect();

//         return document;
//         // Later we will add index here
//     }
// });


export const create = mutation({
    args: {
        title: v.string(),
        parentDocument: v.optional(v.id("documents")),
    },
    handler: async (ctx,args) => {
        const identity = await ctx.auth.getUserIdentity();
        
        if(!identity) {
            throw new Error("User not logged in");
        }

        const userId = identity.subject;
        //now finally create document

        const document = await ctx.db.insert("documents", {
            title: args.title,
            parentDocument: args.parentDocument,
            userId,
            isArchived: false,
            isPublished: false,
        });

        return document;
    }
});