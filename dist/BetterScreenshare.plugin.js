/**
* @name BetterScreenshare
* @version 1.1.0
* @author Phil
* @description With this plugin you can customize your resolution, framerate, bitrate and more for your screenshare!
* @authorId 305288513941667851
* @source https://github.com/philhk/better-discord-screenshare-plugin
 */
var Qt=Object.defineProperty;var $t=(_,M,V)=>M in _?Qt(_,M,{enumerable:!0,configurable:!0,writable:!0,value:V}):_[M]=V;var R=(_,M,V)=>($t(_,typeof M!="symbol"?M+"":M,V),V);/*!
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 * 
 * Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 * Everyone is permitted to copy and distribute verbatim copies
 * of this license document, but changing it is not allowed.
 * 
 * Preamble
 * 
 * The GNU General Public License is a free, copyleft license for
 * software and other kinds of works.
 * 
 * The licenses for most software and other practical works are designed
 * to take away your freedom to share and change the works. By contrast,
 * the GNU General Public License is intended to guarantee your freedom to
 * share and change all versions of a program--to make sure it remains free
 * software for all its users. We, the Free Software Foundation, use the
 * GNU General Public License for most of our software; it applies also to
 * any other work released this way by its authors. You can apply it to
 * your programs, too.
 * 
 * When we speak of free software, we are referring to freedom, not
 * price. Our General Public Licenses are designed to make sure that you
 * have the freedom to distribute copies of free software (and charge for
 * them if you wish), that you receive source code or can get it if you
 * want it, that you can change the software or use pieces of it in new
 * free programs, and that you know you can do these things.
 * 
 * To protect your rights, we need to prevent others from denying you
 * these rights or asking you to surrender the rights. Therefore, you have
 * certain responsibilities if you distribute copies of the software, or if
 * you modify it: responsibilities to respect the freedom of others.
 * 
 * For example, if you distribute copies of such a program, whether
 * gratis or for a fee, you must pass on to the recipients the same
 * freedoms that you received. You must make sure that they, too, receive
 * or can get the source code. And you must show them these terms so they
 * know their rights.
 * 
 * Developers that use the GNU GPL protect your rights with two steps:
 * (1) assert copyright on the software, and (2) offer you this License
 * giving you legal permission to copy, distribute and/or modify it.
 * 
 * For the developers' and authors' protection, the GPL clearly explains
 * that there is no warranty for this free software. For both users' and
 * authors' sake, the GPL requires that modified versions be marked as
 * changed, so that their problems will not be attributed erroneously to
 * authors of previous versions.
 * 
 * Some devices are designed to deny users access to install or run
 * modified versions of the software inside them, although the manufacturer
 * can do so. This is fundamentally incompatible with the aim of
 * protecting users' freedom to change the software. The systematic
 * pattern of such abuse occurs in the area of products for individuals to
 * use, which is precisely where it is most unacceptable. Therefore, we
 * have designed this version of the GPL to prohibit the practice for those
 * products. If such problems arise substantially in other domains, we
 * stand ready to extend this provision to those domains in future versions
 * of the GPL, as needed to protect the freedom of users.
 * 
 * Finally, every program is threatened constantly by software patents.
 * States should not allow patents to restrict development and use of
 * software on general-purpose computers, but in those that do, we wish to
 * avoid the special danger that patents applied to a free program could
 * make it effectively proprietary. To prevent this, the GPL assures that
 * patents cannot be used to render the program non-free.
 * 
 * The precise terms and conditions for copying, distribution and
 * modification follow.
 * 
 * TERMS AND CONDITIONS
 * 
 * 0. Definitions.
 * 
 * "This License" refers to version 3 of the GNU General Public License.
 * 
 * "Copyright" also means copyright-like laws that apply to other kinds of
 * works, such as semiconductor masks.
 * 
 * "The Program" refers to any copyrightable work licensed under this
 * License. Each licensee is addressed as "you". "Licensees" and
 * "recipients" may be individuals or organizations.
 * 
 * To "modify" a work means to copy from or adapt all or part of the work
 * in a fashion requiring copyright permission, other than the making of an
 * exact copy. The resulting work is called a "modified version" of the
 * earlier work or a work "based on" the earlier work.
 * 
 * A "covered work" means either the unmodified Program or a work based
 * on the Program.
 * 
 * To "propagate" a work means to do anything with it that, without
 * permission, would make you directly or secondarily liable for
 * infringement under applicable copyright law, except executing it on a
 * computer or modifying a private copy. Propagation includes copying,
 * distribution (with or without modification), making available to the
 * public, and in some countries other activities as well.
 * 
 * To "convey" a work means any kind of propagation that enables other
 * parties to make or receive copies. Mere interaction with a user through
 * a computer network, with no transfer of a copy, is not conveying.
 * 
 * An interactive user interface displays "Appropriate Legal Notices"
 * to the extent that it includes a convenient and prominently visible
 * feature that (1) displays an appropriate copyright notice, and (2)
 * tells the user that there is no warranty for the work (except to the
 * extent that warranties are provided), that licensees may convey the
 * work under this License, and how to view a copy of this License. If
 * the interface presents a list of user commands or options, such as a
 * menu, a prominent item in the list meets this criterion.
 * 
 * 1. Source Code.
 * 
 * The "source code" for a work means the preferred form of the work
 * for making modifications to it. "Object code" means any non-source
 * form of a work.
 * 
 * A "Standard Interface" means an interface that either is an official
 * standard defined by a recognized standards body, or, in the case of
 * interfaces specified for a particular programming language, one that
 * is widely used among developers working in that language.
 * 
 * The "System Libraries" of an executable work include anything, other
 * than the work as a whole, that (a) is included in the normal form of
 * packaging a Major Component, but which is not part of that Major
 * Component, and (b) serves only to enable use of the work with that
 * Major Component, or to implement a Standard Interface for which an
 * implementation is available to the public in source code form. A
 * "Major Component", in this context, means a major essential component
 * (kernel, window system, and so on) of the specific operating system
 * (if any) on which the executable work runs, or a compiler used to
 * produce the work, or an object code interpreter used to run it.
 * 
 * The "Corresponding Source" for a work in object code form means all
 * the source code needed to generate, install, and (for an executable
 * work) run the object code and to modify the work, including scripts to
 * control those activities. However, it does not include the work's
 * System Libraries, or general-purpose tools or generally available free
 * programs which are used unmodified in performing those activities but
 * which are not part of the work. For example, Corresponding Source
 * includes interface definition files associated with source files for
 * the work, and the source code for shared libraries and dynamically
 * linked subprograms that the work is specifically designed to require,
 * such as by intimate data communication or control flow between those
 * subprograms and other parts of the work.
 * 
 * The Corresponding Source need not include anything that users
 * can regenerate automatically from other parts of the Corresponding
 * Source.
 * 
 * The Corresponding Source for a work in source code form is that
 * same work.
 * 
 * 2. Basic Permissions.
 * 
 * All rights granted under this License are granted for the term of
 * copyright on the Program, and are irrevocable provided the stated
 * conditions are met. This License explicitly affirms your unlimited
 * permission to run the unmodified Program. The output from running a
 * covered work is covered by this License only if the output, given its
 * content, constitutes a covered work. This License acknowledges your
 * rights of fair use or other equivalent, as provided by copyright law.
 * 
 * You may make, run and propagate covered works that you do not
 * convey, without conditions so long as your license otherwise remains
 * in force. You may convey covered works to others for the sole purpose
 * of having them make modifications exclusively for you, or provide you
 * with facilities for running those works, provided that you comply with
 * the terms of this License in conveying all material for which you do
 * not control copyright. Those thus making or running the covered works
 * for you must do so exclusively on your behalf, under your direction
 * and control, on terms that prohibit them from making any copies of
 * your copyrighted material outside their relationship with you.
 * 
 * Conveying under any other circumstances is permitted solely under
 * the conditions stated below. Sublicensing is not allowed; section 10
 * makes it unnecessary.
 * 
 * 3. Protecting Users' Legal Rights From Anti-Circumvention Law.
 * 
 * No covered work shall be deemed part of an effective technological
 * measure under any applicable law fulfilling obligations under article
 * 11 of the WIPO copyright treaty adopted on 20 December 1996, or
 * similar laws prohibiting or restricting circumvention of such
 * measures.
 * 
 * When you convey a covered work, you waive any legal power to forbid
 * circumvention of technological measures to the extent such circumvention
 * is effected by exercising rights under this License with respect to
 * the covered work, and you disclaim any intention to limit operation or
 * modification of the work as a means of enforcing, against the work's
 * users, your or third parties' legal rights to forbid circumvention of
 * technological measures.
 * 
 * 4. Conveying Verbatim Copies.
 * 
 * You may convey verbatim copies of the Program's source code as you
 * receive it, in any medium, provided that you conspicuously and
 * appropriately publish on each copy an appropriate copyright notice;
 * keep intact all notices stating that this License and any
 * non-permissive terms added in accord with section 7 apply to the code;
 * keep intact all notices of the absence of any warranty; and give all
 * recipients a copy of this License along with the Program.
 * 
 * You may charge any price or no price for each copy that you convey,
 * and you may offer support or warranty protection for a fee.
 * 
 * 5. Conveying Modified Source Versions.
 * 
 * You may convey a work based on the Program, or the modifications to
 * produce it from the Program, in the form of source code under the
 * terms of section 4, provided that you also meet all of these conditions:
 * 
 * a) The work must carry prominent notices stating that you modified
 * it, and giving a relevant date.
 * 
 * b) The work must carry prominent notices stating that it is
 * released under this License and any conditions added under section
 * 7.  This requirement modifies the requirement in section 4 to
 * "keep intact all notices".
 * 
 * c) You must license the entire work, as a whole, under this
 * License to anyone who comes into possession of a copy.  This
 * License will therefore apply, along with any applicable section 7
 * additional terms, to the whole of the work, and all its parts,
 * regardless of how they are packaged.  This License gives no
 * permission to license the work in any other way, but it does not
 * invalidate such permission if you have separately received it.
 * 
 * d) If the work has interactive user interfaces, each must display
 * Appropriate Legal Notices; however, if the Program has interactive
 * interfaces that do not display Appropriate Legal Notices, your
 * work need not make them do so.
 * 
 * A compilation of a covered work with other separate and independent
 * works, which are not by their nature extensions of the covered work,
 * and which are not combined with it such as to form a larger program,
 * in or on a volume of a storage or distribution medium, is called an
 * "aggregate" if the compilation and its resulting copyright are not
 * used to limit the access or legal rights of the compilation's users
 * beyond what the individual works permit. Inclusion of a covered work
 * in an aggregate does not cause this License to apply to the other
 * parts of the aggregate.
 * 
 * 6. Conveying Non-Source Forms.
 * 
 * You may convey a covered work in object code form under the terms
 * of sections 4 and 5, provided that you also convey the
 * machine-readable Corresponding Source under the terms of this License,
 * in one of these ways:
 * 
 * a) Convey the object code in, or embodied in, a physical product
 * (including a physical distribution medium), accompanied by the
 * Corresponding Source fixed on a durable physical medium
 * customarily used for software interchange.
 * 
 * b) Convey the object code in, or embodied in, a physical product
 * (including a physical distribution medium), accompanied by a
 * written offer, valid for at least three years and valid for as
 * long as you offer spare parts or customer support for that product
 * model, to give anyone who possesses the object code either (1) a
 * copy of the Corresponding Source for all the software in the
 * product that is covered by this License, on a durable physical
 * medium customarily used for software interchange, for a price no
 * more than your reasonable cost of physically performing this
 * conveying of source, or (2) access to copy the
 * Corresponding Source from a network server at no charge.
 * 
 * c) Convey individual copies of the object code with a copy of the
 * written offer to provide the Corresponding Source.  This
 * alternative is allowed only occasionally and noncommercially, and
 * only if you received the object code with such an offer, in accord
 * with subsection 6b.
 * 
 * d) Convey the object code by offering access from a designated
 * place (gratis or for a charge), and offer equivalent access to the
 * Corresponding Source in the same way through the same place at no
 * further charge.  You need not require recipients to copy the
 * Corresponding Source along with the object code.  If the place to
 * copy the object code is a network server, the Corresponding Source
 * may be on a different server (operated by you or a third party)
 * that supports equivalent copying facilities, provided you maintain
 * clear directions next to the object code saying where to find the
 * Corresponding Source.  Regardless of what server hosts the
 * Corresponding Source, you remain obligated to ensure that it is
 * available for as long as needed to satisfy these requirements.
 * 
 * e) Convey the object code using peer-to-peer transmission, provided
 * you inform other peers where the object code and Corresponding
 * Source of the work are being offered to the general public at no
 * charge under subsection 6d.
 * 
 * A separable portion of the object code, whose source code is excluded
 * from the Corresponding Source as a System Library, need not be
 * included in conveying the object code work.
 * 
 * A "User Product" is either (1) a "consumer product", which means any
 * tangible personal property which is normally used for personal, family,
 * or household purposes, or (2) anything designed or sold for incorporation
 * into a dwelling. In determining whether a product is a consumer product,
 * doubtful cases shall be resolved in favor of coverage. For a particular
 * product received by a particular user, "normally used" refers to a
 * typical or common use of that class of product, regardless of the status
 * of the particular user or of the way in which the particular user
 * actually uses, or expects or is expected to use, the product. A product
 * is a consumer product regardless of whether the product has substantial
 * commercial, industrial or non-consumer uses, unless such uses represent
 * the only significant mode of use of the product.
 * 
 * "Installation Information" for a User Product means any methods,
 * procedures, authorization keys, or other information required to install
 * and execute modified versions of a covered work in that User Product from
 * a modified version of its Corresponding Source. The information must
 * suffice to ensure that the continued functioning of the modified object
 * code is in no case prevented or interfered with solely because
 * modification has been made.
 * 
 * If you convey an object code work under this section in, or with, or
 * specifically for use in, a User Product, and the conveying occurs as
 * part of a transaction in which the right of possession and use of the
 * User Product is transferred to the recipient in perpetuity or for a
 * fixed term (regardless of how the transaction is characterized), the
 * Corresponding Source conveyed under this section must be accompanied
 * by the Installation Information. But this requirement does not apply
 * if neither you nor any third party retains the ability to install
 * modified object code on the User Product (for example, the work has
 * been installed in ROM).
 * 
 * The requirement to provide Installation Information does not include a
 * requirement to continue to provide support service, warranty, or updates
 * for a work that has been modified or installed by the recipient, or for
 * the User Product in which it has been modified or installed. Access to a
 * network may be denied when the modification itself materially and
 * adversely affects the operation of the network or violates the rules and
 * protocols for communication across the network.
 * 
 * Corresponding Source conveyed, and Installation Information provided,
 * in accord with this section must be in a format that is publicly
 * documented (and with an implementation available to the public in
 * source code form), and must require no special password or key for
 * unpacking, reading or copying.
 * 
 * 7. Additional Terms.
 * 
 * "Additional permissions" are terms that supplement the terms of this
 * License by making exceptions from one or more of its conditions.
 * Additional permissions that are applicable to the entire Program shall
 * be treated as though they were included in this License, to the extent
 * that they are valid under applicable law. If additional permissions
 * apply only to part of the Program, that part may be used separately
 * under those permissions, but the entire Program remains governed by
 * this License without regard to the additional permissions.
 * 
 * When you convey a copy of a covered work, you may at your option
 * remove any additional permissions from that copy, or from any part of
 * it. (Additional permissions may be written to require their own
 * removal in certain cases when you modify the work.) You may place
 * additional permissions on material, added by you to a covered work,
 * for which you have or can give appropriate copyright permission.
 * 
 * Notwithstanding any other provision of this License, for material you
 * add to a covered work, you may (if authorized by the copyright holders of
 * that material) supplement the terms of this License with terms:
 * 
 * a) Disclaiming warranty or limiting liability differently from the
 * terms of sections 15 and 16 of this License; or
 * 
 * b) Requiring preservation of specified reasonable legal notices or
 * author attributions in that material or in the Appropriate Legal
 * Notices displayed by works containing it; or
 * 
 * c) Prohibiting misrepresentation of the origin of that material, or
 * requiring that modified versions of such material be marked in
 * reasonable ways as different from the original version; or
 * 
 * d) Limiting the use for publicity purposes of names of licensors or
 * authors of the material; or
 * 
 * e) Declining to grant rights under trademark law for use of some
 * trade names, trademarks, or service marks; or
 * 
 * f) Requiring indemnification of licensors and authors of that
 * material by anyone who conveys the material (or modified versions of
 * it) with contractual assumptions of liability to the recipient, for
 * any liability that these contractual assumptions directly impose on
 * those licensors and authors.
 * 
 * All other non-permissive additional terms are considered "further
 * restrictions" within the meaning of section 10. If the Program as you
 * received it, or any part of it, contains a notice stating that it is
 * governed by this License along with a term that is a further
 * restriction, you may remove that term. If a license document contains
 * a further restriction but permits relicensing or conveying under this
 * License, you may add to a covered work material governed by the terms
 * of that license document, provided that the further restriction does
 * not survive such relicensing or conveying.
 * 
 * If you add terms to a covered work in accord with this section, you
 * must place, in the relevant source files, a statement of the
 * additional terms that apply to those files, or a notice indicating
 * where to find the applicable terms.
 * 
 * Additional terms, permissive or non-permissive, may be stated in the
 * form of a separately written license, or stated as exceptions;
 * the above requirements apply either way.
 * 
 * 8. Termination.
 * 
 * You may not propagate or modify a covered work except as expressly
 * provided under this License. Any attempt otherwise to propagate or
 * modify it is void, and will automatically terminate your rights under
 * this License (including any patent licenses granted under the third
 * paragraph of section 11).
 * 
 * However, if you cease all violation of this License, then your
 * license from a particular copyright holder is reinstated (a)
 * provisionally, unless and until the copyright holder explicitly and
 * finally terminates your license, and (b) permanently, if the copyright
 * holder fails to notify you of the violation by some reasonable means
 * prior to 60 days after the cessation.
 * 
 * Moreover, your license from a particular copyright holder is
 * reinstated permanently if the copyright holder notifies you of the
 * violation by some reasonable means, this is the first time you have
 * received notice of violation of this License (for any work) from that
 * copyright holder, and you cure the violation prior to 30 days after
 * your receipt of the notice.
 * 
 * Termination of your rights under this section does not terminate the
 * licenses of parties who have received copies or rights from you under
 * this License. If your rights have been terminated and not permanently
 * reinstated, you do not qualify to receive new licenses for the same
 * material under section 10.
 * 
 * 9. Acceptance Not Required for Having Copies.
 * 
 * You are not required to accept this License in order to receive or
 * run a copy of the Program. Ancillary propagation of a covered work
 * occurring solely as a consequence of using peer-to-peer transmission
 * to receive a copy likewise does not require acceptance. However,
 * nothing other than this License grants you permission to propagate or
 * modify any covered work. These actions infringe copyright if you do
 * not accept this License. Therefore, by modifying or propagating a
 * covered work, you indicate your acceptance of this License to do so.
 * 
 * 10. Automatic Licensing of Downstream Recipients.
 * 
 * Each time you convey a covered work, the recipient automatically
 * receives a license from the original licensors, to run, modify and
 * propagate that work, subject to this License. You are not responsible
 * for enforcing compliance by third parties with this License.
 * 
 * An "entity transaction" is a transaction transferring control of an
 * organization, or substantially all assets of one, or subdividing an
 * organization, or merging organizations. If propagation of a covered
 * work results from an entity transaction, each party to that
 * transaction who receives a copy of the work also receives whatever
 * licenses to the work the party's predecessor in interest had or could
 * give under the previous paragraph, plus a right to possession of the
 * Corresponding Source of the work from the predecessor in interest, if
 * the predecessor has it or can get it with reasonable efforts.
 * 
 * You may not impose any further restrictions on the exercise of the
 * rights granted or affirmed under this License. For example, you may
 * not impose a license fee, royalty, or other charge for exercise of
 * rights granted under this License, and you may not initiate litigation
 * (including a cross-claim or counterclaim in a lawsuit) alleging that
 * any patent claim is infringed by making, using, selling, offering for
 * sale, or importing the Program or any portion of it.
 * 
 * 11. Patents.
 * 
 * A "contributor" is a copyright holder who authorizes use under this
 * License of the Program or a work on which the Program is based. The
 * work thus licensed is called the contributor's "contributor version".
 * 
 * A contributor's "essential patent claims" are all patent claims
 * owned or controlled by the contributor, whether already acquired or
 * hereafter acquired, that would be infringed by some manner, permitted
 * by this License, of making, using, or selling its contributor version,
 * but do not include claims that would be infringed only as a
 * consequence of further modification of the contributor version. For
 * purposes of this definition, "control" includes the right to grant
 * patent sublicenses in a manner consistent with the requirements of
 * this License.
 * 
 * Each contributor grants you a non-exclusive, worldwide, royalty-free
 * patent license under the contributor's essential patent claims, to
 * make, use, sell, offer for sale, import and otherwise run, modify and
 * propagate the contents of its contributor version.
 * 
 * In the following three paragraphs, a "patent license" is any express
 * agreement or commitment, however denominated, not to enforce a patent
 * (such as an express permission to practice a patent or covenant not to
 * sue for patent infringement). To "grant" such a patent license to a
 * party means to make such an agreement or commitment not to enforce a
 * patent against the party.
 * 
 * If you convey a covered work, knowingly relying on a patent license,
 * and the Corresponding Source of the work is not available for anyone
 * to copy, free of charge and under the terms of this License, through a
 * publicly available network server or other readily accessible means,
 * then you must either (1) cause the Corresponding Source to be so
 * available, or (2) arrange to deprive yourself of the benefit of the
 * patent license for this particular work, or (3) arrange, in a manner
 * consistent with the requirements of this License, to extend the patent
 * license to downstream recipients. "Knowingly relying" means you have
 * actual knowledge that, but for the patent license, your conveying the
 * covered work in a country, or your recipient's use of the covered work
 * in a country, would infringe one or more identifiable patents in that
 * country that you have reason to believe are valid.
 * 
 * If, pursuant to or in connection with a single transaction or
 * arrangement, you convey, or propagate by procuring conveyance of, a
 * covered work, and grant a patent license to some of the parties
 * receiving the covered work authorizing them to use, propagate, modify
 * or convey a specific copy of the covered work, then the patent license
 * you grant is automatically extended to all recipients of the covered
 * work and works based on it.
 * 
 * A patent license is "discriminatory" if it does not include within
 * the scope of its coverage, prohibits the exercise of, or is
 * conditioned on the non-exercise of one or more of the rights that are
 * specifically granted under this License. You may not convey a covered
 * work if you are a party to an arrangement with a third party that is
 * in the business of distributing software, under which you make payment
 * to the third party based on the extent of your activity of conveying
 * the work, and under which the third party grants, to any of the
 * parties who would receive the covered work from you, a discriminatory
 * patent license (a) in connection with copies of the covered work
 * conveyed by you (or copies made from those copies), or (b) primarily
 * for and in connection with specific products or compilations that
 * contain the covered work, unless you entered into that arrangement,
 * or that patent license was granted, prior to 28 March 2007.
 * 
 * Nothing in this License shall be construed as excluding or limiting
 * any implied license or other defenses to infringement that may
 * otherwise be available to you under applicable patent law.
 * 
 * 12. No Surrender of Others' Freedom.
 * 
 * If conditions are imposed on you (whether by court order, agreement or
 * otherwise) that contradict the conditions of this License, they do not
 * excuse you from the conditions of this License. If you cannot convey a
 * covered work so as to satisfy simultaneously your obligations under this
 * License and any other pertinent obligations, then as a consequence you may
 * not convey it at all. For example, if you agree to terms that obligate you
 * to collect a royalty for further conveying from those to whom you convey
 * the Program, the only way you could satisfy both those terms and this
 * License would be to refrain entirely from conveying the Program.
 * 
 * 13. Use with the GNU Affero General Public License.
 * 
 * Notwithstanding any other provision of this License, you have
 * permission to link or combine any covered work with a work licensed
 * under version 3 of the GNU Affero General Public License into a single
 * combined work, and to convey the resulting work. The terms of this
 * License will continue to apply to the part which is the covered work,
 * but the special requirements of the GNU Affero General Public License,
 * section 13, concerning interaction through a network will apply to the
 * combination as such.
 * 
 * 14. Revised Versions of this License.
 * 
 * The Free Software Foundation may publish revised and/or new versions of
 * the GNU General Public License from time to time. Such new versions will
 * be similar in spirit to the present version, but may differ in detail to
 * address new problems or concerns.
 * 
 * Each version is given a distinguishing version number. If the
 * Program specifies that a certain numbered version of the GNU General
 * Public License "or any later version" applies to it, you have the
 * option of following the terms and conditions either of that numbered
 * version or of any later version published by the Free Software
 * Foundation. If the Program does not specify a version number of the
 * GNU General Public License, you may choose any version ever published
 * by the Free Software Foundation.
 * 
 * If the Program specifies that a proxy can decide which future
 * versions of the GNU General Public License can be used, that proxy's
 * public statement of acceptance of a version permanently authorizes you
 * to choose that version for the Program.
 * 
 * Later license versions may give you additional or different
 * permissions. However, no additional obligations are imposed on any
 * author or copyright holder as a result of your choosing to follow a
 * later version.
 * 
 * 15. Disclaimer of Warranty.
 * 
 * THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
 * APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
 * HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
 * OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
 * IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
 * ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
 * 
 * 16. Limitation of Liability.
 * 
 * IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
 * WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
 * THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
 * GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
 * USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
 * DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
 * PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
 * EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGES.
 * 
 * 17. Interpretation of Sections 15 and 16.
 * 
 * If the disclaimer of warranty and limitation of liability provided
 * above cannot be given local legal effect according to their terms,
 * reviewing courts shall apply local law that most closely approximates
 * an absolute waiver of all civil liability in connection with the
 * Program, unless a warranty or assumption of liability accompanies a
 * copy of the Program in return for a fee.
 * 
 * END OF TERMS AND CONDITIONS
 * 
 * How to Apply These Terms to Your New Programs
 * 
 * If you develop a new program, and you want it to be of the greatest
 * possible use to the public, the best way to achieve this is to make it
 * free software which everyone can redistribute and change under these terms.
 * 
 * To do so, attach the following notices to the program. It is safest
 * to attach them to the start of each source file to most effectively
 * state the exclusion of warranty; and each file should have at least
 * the "copyright" line and a pointer to where the full notice is found.
 * 
 * <one line to give the program's name and a brief idea of what it does.>
 * Copyright (C) <year>  <name of author>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * Also add information on how to contact you by electronic and paper mail.
 * 
 * If the program does terminal interaction, make it output a short
 * notice like this when it starts in an interactive mode:
 * 
 * <program>  Copyright (C) <year>  <name of author>
 * This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
 * This is free software, and you are welcome to redistribute it
 * under certain conditions; type `show c' for details.
 * 
 * The hypothetical commands `show w' and `show c' should show the appropriate
 * parts of the General Public License. Of course, your program's commands
 * might be different; for a GUI interface, you would use an "about box".
 * 
 * You should also get your employer (if you work as a programmer) or school,
 * if any, to sign a "copyright disclaimer" for the program, if necessary.
 * For more information on this, and how to apply and follow the GNU GPL, see
 * <https://www.gnu.org/licenses/>.
 * 
 * The GNU General Public License does not permit incorporating your program
 * into proprietary programs. If your program is a subroutine library, you
 * may consider it more useful to permit linking proprietary applications with
 * the library. If this is what you want to do, use the GNU Lesser General
 * Public License instead of this License. But first, please read
 * <https://www.gnu.org/licenses/why-not-lgpl.html>.
 */(function(_){"use strict";const M=(...e)=>t=>t instanceof Object&&e.every(r=>r in t),V=(...e)=>t=>{var r,n;for(;t instanceof Object&&"$$typeof"in t;)t=t.render??t.type;if(t instanceof Function){const i=t.toString(),o=(n=(r=t.prototype)==null?void 0:r.render)==null?void 0:n.toString();return e.every(a=>typeof a=="string"?i.includes(a)||(o==null?void 0:o.includes(a)):a(i)||o&&a(o))}else return!1},_e=(e,{resolve:t=!0,entries:r=!1}={})=>BdApi.Webpack.getModule(e,{defaultExport:t,searchExports:r}),K=(e,t)=>_e(M(...e),t),we=(e,t)=>_e(V(...e),t);let X;const C=()=>{if(X)return X;throw Error("Accessing meta before initialization")},et=e=>{X=e},tt="#3a71c1",nt=(e,...t)=>e(`%c[${C().name}] %c${C().version?`(v${C().version})`:""}`,`color: ${tt}; font-weight: 700;`,"color: #666; font-size: .8em;",...t),Z=(...e)=>nt(console.log,...e);let q=[];const rt=(e,t,r,n,i)=>{const o=t==null?void 0:t[r],a=i.name??String(r);if(!(o instanceof Function))throw TypeError(`patch target ${a} is ${o} not function`);const m=BdApi.Patcher[e](C().name,t,r,i.once?(d,s,g)=>{const l=n({cancel:m,original:o,context:d,args:s,result:g});return m(),l}:(d,s,g)=>n({cancel:m,original:o,context:d,args:s,result:g}));return i.silent||Z(`Patched ${a}`),m},Ae=(e,t,r,n={})=>rt("after",e,t,r,n),ot=()=>{if(q.length+BdApi.Patcher.getPatchesByCaller(C().name).length>0){BdApi.Patcher.unpatchAll(C().name);for(const e of q)e();q=[],Z("Unpatched all")}},it=(()=>({name:"BetterScreenshare",version:"1.1.0",author:"Phil",description:"With this plugin you can customize your resolution, framerate, bitrate and more for your screenshare!",authorId:"305288513941667851",source:"https://github.com/philhk/better-discord-screenshare-plugin"}))();class st{}const xe={get MediaEngineStore(){return K(["getAttenuateWhileSpeakingOthers"])},get StreamStore(){return K(["getAllActiveStreams","getStreamForUser"])}},Ie={get Utils(){return K(["getPidFromDesktopSource"])},get Dispatcher(){return K(["isDispatching","subscribe"])}},Re={get Dropdown(){return we(['"single"',"isSelected","maxVisibleItems",".serialize"],{entries:!0})},get TextInput(){return we(["placeholder","maxLength","clearable"],{entries:!0})}},at={get Text(){return K(["h5"])}},ct=Re.Dropdown,ut=Re.TextInput,dt={DEFAULT:"default",MINI:"mini"},lt=at.Text,pt=Ie.Utils;Ie.Dispatcher;const ee=xe.MediaEngineStore;xe.StreamStore;const De=e=>{if(typeof e=="object"&&e!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}return Object.prototype.toString.call(e)==="[object Object]"}return!1},B=(...e)=>e.reduce((t,r)=>{if(Array.isArray(r))throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");return Object.keys(r).forEach(n=>{["__proto__","constructor","prototype"].includes(n)||(Array.isArray(t[n])&&Array.isArray(r[n])?t[n]=B.options.mergeArrays?Array.from(new Set(t[n].concat(r[n]))):r[n]:De(t[n])&&De(r[n])?t[n]=B(t[n],r[n]):t[n]=r[n])}),t},{}),Ce={mergeArrays:!0};B.options=Ce,B.withOptions=(e,...t)=>{B.options=Object.assign({mergeArrays:!0},e);const r=B(...t);return B.options=Ce,r};class Y{static addListener(t,r,n,i){t[r](n,i);const o={emitter:t,event:n,fn:i};return this.events.push(o),()=>this.removeListener(o)}static removeListener(t){t.emitter.removeListener(t.event,t.fn),this.events=this.events.filter(r=>r!==t)}static removeAllListeners(){this.events.forEach(t=>t.emitter.removeListener(t.event,t.fn)),this.events=[]}}R(Y,"events",[]);const Be=e=>{let t;const r=new Set,n=(d,s)=>{const g=typeof d=="function"?d(t):d;if(!Object.is(g,t)){const l=t;t=s??typeof g!="object"?g:Object.assign({},t,g),r.forEach(f=>f(t,l))}},i=()=>t,m={setState:n,getState:i,subscribe:d=>(r.add(d),()=>r.delete(d)),destroy:()=>{({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,i,m),m},ht=e=>e?Be(e):Be;function ft(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var te={},mt={get exports(){return te},set exports(e){te=e}},ne={},J={},gt={get exports(){return J},set exports(e){J=e}},re={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te;function vt(){if(Te)return re;Te=1;var e=_;function t(l,f){return l===f&&(l!==0||1/l===1/f)||l!==l&&f!==f}var r=typeof Object.is=="function"?Object.is:t,n=e.useState,i=e.useEffect,o=e.useLayoutEffect,a=e.useDebugValue;function m(l,f){var p=f(),S=n({inst:{value:p,getSnapshot:f}}),u=S[0].inst,c=S[1];return o(function(){u.value=p,u.getSnapshot=f,d(u)&&c({inst:u})},[l,p,f]),i(function(){return d(u)&&c({inst:u}),l(function(){d(u)&&c({inst:u})})},[l]),a(p),p}function d(l){var f=l.getSnapshot;l=l.value;try{var p=f();return!r(l,p)}catch{return!0}}function s(l,f){return f()}var g=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?s:m;return re.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:g,re}var oe={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le;function St(){return Le||(Le=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=_,t=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function r(E){{for(var y=arguments.length,A=new Array(y>1?y-1:0),O=1;O<y;O++)A[O-1]=arguments[O];n("error",E,A)}}function n(E,y,A){{var O=t.ReactDebugCurrentFrame,w=O.getStackAddendum();w!==""&&(y+="%s",A=A.concat([w]));var D=A.map(function(x){return String(x)});D.unshift("Warning: "+y),Function.prototype.apply.call(console[E],console,D)}}function i(E,y){return E===y&&(E!==0||1/E===1/y)||E!==E&&y!==y}var o=typeof Object.is=="function"?Object.is:i,a=e.useState,m=e.useEffect,d=e.useLayoutEffect,s=e.useDebugValue,g=!1,l=!1;function f(E,y,A){g||e.startTransition!==void 0&&(g=!0,r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var O=y();if(!l){var w=y();o(O,w)||(r("The result of getSnapshot should be cached to avoid an infinite loop"),l=!0)}var D=a({inst:{value:O,getSnapshot:y}}),x=D[0].inst,h=D[1];return d(function(){x.value=O,x.getSnapshot=y,p(x)&&h({inst:x})},[E,O,y]),m(function(){p(x)&&h({inst:x});var N=function(){p(x)&&h({inst:x})};return E(N)},[E]),s(O),O}function p(E){var y=E.getSnapshot,A=E.value;try{var O=y();return!o(A,O)}catch{return!0}}function S(E,y,A){return y()}var u=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",c=!u,v=c?S:f,b=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:v;oe.useSyncExternalStore=b,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),oe}var Pe;function Me(){return Pe||(Pe=1,function(e){process.env.NODE_ENV==="production"?e.exports=vt():e.exports=St()}(gt)),J}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He;function yt(){if(He)return ne;He=1;var e=_,t=Me();function r(s,g){return s===g&&(s!==0||1/s===1/g)||s!==s&&g!==g}var n=typeof Object.is=="function"?Object.is:r,i=t.useSyncExternalStore,o=e.useRef,a=e.useEffect,m=e.useMemo,d=e.useDebugValue;return ne.useSyncExternalStoreWithSelector=function(s,g,l,f,p){var S=o(null);if(S.current===null){var u={hasValue:!1,value:null};S.current=u}else u=S.current;S=m(function(){function v(O){if(!b){if(b=!0,E=O,O=f(O),p!==void 0&&u.hasValue){var w=u.value;if(p(w,O))return y=w}return y=O}if(w=y,n(E,O))return w;var D=f(O);return p!==void 0&&p(w,D)?w:(E=O,y=D)}var b=!1,E,y,A=l===void 0?null:l;return[function(){return v(g())},A===null?void 0:function(){return v(A())}]},[g,l,f,p]);var c=i(s,S[0],S[1]);return a(function(){u.hasValue=!0,u.value=c},[c]),d(c),c},ne}var ie={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We;function Et(){return We||(We=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=_,t=Me();function r(g,l){return g===l&&(g!==0||1/g===1/l)||g!==g&&l!==l}var n=typeof Object.is=="function"?Object.is:r,i=t.useSyncExternalStore,o=e.useRef,a=e.useEffect,m=e.useMemo,d=e.useDebugValue;function s(g,l,f,p,S){var u=o(null),c;u.current===null?(c={hasValue:!1,value:null},u.current=c):c=u.current;var v=m(function(){var A=!1,O,w,D=function(G){if(!A){A=!0,O=G;var ye=p(G);if(S!==void 0&&c.hasValue){var Ee=c.value;if(S(Ee,ye))return w=Ee,Ee}return w=ye,ye}var Jt=O,be=w;if(n(Jt,G))return be;var Oe=p(G);return S!==void 0&&S(be,Oe)?be:(O=G,w=Oe,Oe)},x=f===void 0?null:f,h=function(){return D(l())},N=x===null?void 0:function(){return D(x())};return[h,N]},[l,f,p,S]),b=v[0],E=v[1],y=i(g,b,E);return a(function(){c.hasValue=!0,c.value=y},[y]),d(y),y}ie.useSyncExternalStoreWithSelector=s,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),ie}(function(e){process.env.NODE_ENV==="production"?e.exports=yt():e.exports=Et()})(mt);const bt=ft(te),{useSyncExternalStoreWithSelector:Ot}=bt;function _t(e,t=e.getState,r){const n=Ot(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return _.useDebugValue(n),n}const Fe=e=>{({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?ht(e):e,r=(n,i)=>_t(t,n,i);return Object.assign(r,t),r},wt=e=>e?Fe(e):Fe;function Ve(e){let t;try{t=e()}catch{return}return{getItem:n=>{var i;const o=m=>m===null?null:JSON.parse(m),a=(i=t.getItem(n))!=null?i:null;return a instanceof Promise?a.then(o):o(a)},setItem:(n,i)=>t.setItem(n,JSON.stringify(i)),removeItem:n=>t.removeItem(n)}}const z=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then(n){return z(n)(r)},catch(n){return this}}}catch(r){return{then(n){return this},catch(n){return z(n)(r)}}}},At=(e,t)=>(r,n,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:c=>c,version:0,merge:(c,v)=>({...v,...c}),...t},a=!1;const m=new Set,d=new Set;let s;try{s=o.getStorage()}catch{}if(!s)return e((...c)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...c)},n,i);const g=z(o.serialize),l=()=>{const c=o.partialize({...n()});let v;const b=g({state:c,version:o.version}).then(E=>s.setItem(o.name,E)).catch(E=>{v=E});if(v)throw v;return b},f=i.setState;i.setState=(c,v)=>{f(c,v),l()};const p=e((...c)=>{r(...c),l()},n,i);let S;const u=()=>{var c;if(!s)return;a=!1,m.forEach(b=>b(n()));const v=((c=o.onRehydrateStorage)==null?void 0:c.call(o,n()))||void 0;return z(s.getItem.bind(s))(o.name).then(b=>{if(b)return o.deserialize(b)}).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==o.version){if(o.migrate)return o.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var E;return S=o.merge(b,(E=n())!=null?E:p),r(S,!0),l()}).then(()=>{v==null||v(S,void 0),a=!0,d.forEach(b=>b(S))}).catch(b=>{v==null||v(void 0,b)})};return i.persist={setOptions:c=>{o={...o,...c},c.getStorage&&(s=c.getStorage())},clearStorage:()=>{s==null||s.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>u(),hasHydrated:()=>a,onHydrate:c=>(m.add(c),()=>{m.delete(c)}),onFinishHydration:c=>(d.add(c),()=>{d.delete(c)})},u(),S||p},xt=(e,t)=>(r,n,i)=>{let o={storage:Ve(()=>localStorage),partialize:u=>u,version:0,merge:(u,c)=>({...c,...u}),...t},a=!1;const m=new Set,d=new Set;let s=o.storage;if(!s)return e((...u)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...u)},n,i);const g=()=>{const u=o.partialize({...n()});return s.setItem(o.name,{state:u,version:o.version})},l=i.setState;i.setState=(u,c)=>{l(u,c),g()};const f=e((...u)=>{r(...u),g()},n,i);let p;const S=()=>{var u;if(!s)return;a=!1,m.forEach(v=>v(n()));const c=((u=o.onRehydrateStorage)==null?void 0:u.call(o,n()))||void 0;return z(s.getItem.bind(s))(o.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==o.version){if(o.migrate)return o.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var b;return p=o.merge(v,(b=n())!=null?b:f),r(p,!0),g()}).then(()=>{c==null||c(p,void 0),a=!0,d.forEach(v=>v(p))}).catch(v=>{c==null||c(void 0,v)})};return i.persist={setOptions:u=>{o={...o,...u},u.storage&&(s=u.storage)},clearStorage:()=>{s==null||s.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>S(),hasHydrated:()=>a,onHydrate:u=>(m.add(u),()=>{m.delete(u)}),onFinishHydration:u=>(d.add(u),()=>{d.delete(u)})},S(),p||f},It=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),At(e,t)):xt(e,t),Rt=(e,t)=>t.some(r=>e instanceof r);let je,Ue;function Dt(){return je||(je=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ct(){return Ue||(Ue=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ne=new WeakMap,se=new WeakMap,ke=new WeakMap,ae=new WeakMap,ce=new WeakMap;function Bt(e){const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{r(W(e.result)),i()},a=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(r=>{r instanceof IDBCursor&&Ne.set(r,e)}).catch(()=>{}),ce.set(t,e),t}function Tt(e){if(se.has(e))return;const t=new Promise((r,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{r(),i()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});se.set(e,t)}let ue={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return se.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ke.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return W(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Lt(e){ue=e(ue)}function Pt(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(de(this),t,...r);return ke.set(n,t.sort?t.sort():[t]),W(n)}:Ct().includes(e)?function(...t){return e.apply(de(this),t),W(Ne.get(this))}:function(...t){return W(e.apply(de(this),t))}}function Mt(e){return typeof e=="function"?Pt(e):(e instanceof IDBTransaction&&Tt(e),Rt(e,Dt())?new Proxy(e,ue):e)}function W(e){if(e instanceof IDBRequest)return Bt(e);if(ae.has(e))return ae.get(e);const t=Mt(e);return t!==e&&(ae.set(e,t),ce.set(t,e)),t}const de=e=>ce.get(e);function Ht(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),m=W(a);return n&&a.addEventListener("upgradeneeded",d=>{n(W(a.result),d.oldVersion,d.newVersion,W(a.transaction),d)}),r&&a.addEventListener("blocked",d=>r(d.oldVersion,d.newVersion,d)),m.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",s=>i(s.oldVersion,s.newVersion,s))}).catch(()=>{}),m}const Wt=["get","getKey","getAll","getAllKeys","count"],Ft=["put","add","delete","clear"],le=new Map;function Ke(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(le.get(t))return le.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=Ft.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Wt.includes(r)))return;const o=async function(a,...m){const d=this.transaction(a,i?"readwrite":"readonly");let s=d.store;return n&&(s=s.index(m.shift())),(await Promise.all([s[r](...m),i&&d.done]))[0]};return le.set(t,o),o}Lt(e=>({...e,get:(t,r,n)=>Ke(t,r)||e.get(t,r,n),has:(t,r)=>!!Ke(t,r)||e.has(t,r)}));const pe=Ht("screenshare-plugin-store",1,{upgrade(e){e.createObjectStore("screenshare-plugin")}});async function Vt(e){return(await pe).get("screenshare-plugin",e)}async function jt(e,t){return(await pe).put("screenshare-plugin",t,e)}async function Ut(e){return(await pe).delete("screenshare-plugin",e)}const Nt={getItem:async e=>await Vt(e)||null,setItem:async(e,t)=>{await jt(e,t)},removeItem:async e=>{await Ut(e)}},he=e=>e*1e3,Q=(e,t)=>{if(!e)return[];const r=[];return Object.entries(e).filter(([n,i])=>typeof i=="function").forEach(([n,i])=>(!(t!=null&&t.filter)||t.filter([n,i]))&&r.push(Ae(e,n,o=>{Z(`${t!=null&&t.name?`[${t.name}] `:""}[${n}]`,o)}))),t!=null&&t.searchProtos?[...r,...Q(e.__proto__,t)]:r},T=(e,t)=>{const r=parseInt(e);t(r)},L=e=>typeof e=="number"?e:e?parseInt(e):void 0,I={bitrate:{minimum:1e3,target:2500,maximum:5e3},encode:{framerate:60,height:1080,width:1920},capture:{framerate:60,height:1080,width:1920},audioCodec:"OPUS",videoCodec:"H264"},$=wt(It((e,t)=>({screenshare:{bitrate:{getMaximum:()=>L(t().screenshare.bitrate.maximum)||I.bitrate.maximum,getMinimum:()=>L(t().screenshare.bitrate.minimum)||I.bitrate.minimum,getTarget:()=>L(t().screenshare.bitrate.target)||I.bitrate.target,setMaximum:r=>t().customSet(n=>(n.screenshare.bitrate.maximum=r,n)),setMinimum:r=>t().customSet(n=>(n.screenshare.bitrate.minimum=r,n)),setTarget:r=>t().customSet(n=>(n.screenshare.bitrate.target=r,n))},encode:{getFramerate:()=>L(t().screenshare.encode.framerate)||I.encode.framerate,getWidth:()=>L(t().screenshare.encode.width)||I.encode.width,getHeight:()=>L(t().screenshare.encode.height)||I.encode.height,setFramerate:r=>t().customSet(n=>(n.screenshare.encode.framerate=r,n)),setWidth:r=>t().customSet(n=>(n.screenshare.encode.width=r,n)),setHeight:r=>t().customSet(n=>(n.screenshare.encode.height=r,n))},capture:{getFramerate:()=>L(t().screenshare.capture.framerate)||I.capture.framerate,getWidth:()=>L(t().screenshare.capture.width)||I.capture.width,getHeight:()=>L(t().screenshare.capture.height)||I.capture.height,setFramerate:r=>t().customSet(n=>(n.screenshare.capture.framerate=r,n)),setWidth:r=>t().customSet(n=>(n.screenshare.capture.width=r,n)),setHeight:r=>t().customSet(n=>(n.screenshare.capture.height=r,n))},setAudioCodec:r=>t().customSet(n=>(n.screenshare.audioCodec=r,n)),setVideoCodec:r=>t().customSet(n=>(n.screenshare.videoCodec=r,n)),setAudioSource:r=>t().customSet(n=>(n.screenshare.audioSource=r,n)),setKeyframeInterval:r=>t().customSet(n=>(n.screenshare.keyframeInterval=r,n)),getAudioCodec:()=>t().screenshare.audioCodec||I.audioCodec,getVideoCodec:()=>t().screenshare.videoCodec||I.videoCodec,getKeyframeInterval:()=>L(t().screenshare.keyframeInterval),getAudioSource:()=>t().screenshare.audioSource},customSet:r=>{e(n=>B(n,r(n)||n))}}),{name:"BetterScreensharePlugin",storage:Ve(()=>Nt),merge:(e,t)=>B(t,e)})),kt=250,ve=class{static applyResolutionOverride(t){const r=this.overrideState.get(t);if(!r)return;const{encode:n,capture:i,bitrate:o}=B(I,$.getState().screenshare);r.isApplyingOverride=!0;try{t.setDesktopEncodingOptions(n.getWidth(),n.getHeight(),n.getFramerate()),t.overwriteQualityForTesting({encode:{framerate:n.getFramerate(),width:n.getWidth(),height:n.getHeight()},capture:{framerate:i.getFramerate(),width:i.getWidth(),height:i.getHeight()},bitrateMax:he(o.getMaximum()),bitrateMin:he(o.getMinimum()),bitrateTarget:he(o.getTarget())})}finally{r.isApplyingOverride=!1}r.lastAppliedAt=Date.now()}static applyLiveSettings(t){const{getKeyframeInterval:r}=B(I,$.getState().screenshare);this.applyResolutionOverride(t);const n=r();n&&t.setKeyframeInterval(n)}static applyInitialConnectSettings(t){const{getAudioCodec:r,getAudioSource:n,getVideoCodec:i}=B(I,$.getState().screenshare);t.setCodecs(r(),i(),"stream");const o=n();if(o==="none")t.setSoundshareSource(0,!1);else if(o&&o!=="default"){const a=pt.getPidFromDesktopSource(o);a&&t.setSoundshareSource(a,this.mediaEngineStore.getExperimentalSoundshare())}}static applyToActiveConnections(){for(const t of this.mediaEngine.connections)t.context==="stream"&&this.overrideState.has(t)&&this.applyLiveSettings(t)}static patch(){this.unpatch();const t=Y.addListener(this.mediaEngine.emitter,"on","connection",r=>{if(r.context!=="stream")return;this.overrideState.set(r,{isApplyingOverride:!1,lastAppliedAt:0}),r.on("connected",()=>{this.applyLiveSettings(r),this.applyInitialConnectSettings(r)});const n=Ae(r,"applyQualityConstraints",()=>{const i=this.overrideState.get(r);!i||i.isApplyingOverride||Date.now()-i.lastAppliedAt<kt||this.applyResolutionOverride(r)},{silent:!0});r.on("destroy",()=>{n(),this.overrideState.delete(r)}),this.unpatchFunctions.push(n)});this.unpatchFunctions.push(t)}static unpatch(){this.unpatchFunctions.forEach(t=>t()),this.unpatchFunctions=[]}};let H=ve;R(H,"mediaEngineStore",ee),R(H,"mediaEngine",ve.mediaEngineStore.getMediaEngine()),R(H,"unpatchFunctions",[]),R(H,"overrideState",new WeakMap);const fe=e=>_.createElement(ct,e),P=e=>_.createElement(ut,{...e,...e.size?{size:dt[e.size]}:{}}),{h5:Kt}=lt,ze=ee.getMediaEngine(),Ge=()=>ze.getWindowPreviews(1,1,!1),zt=()=>BdApi.Plugins.reload(C().name),j=e=>BdApi.React.createElement("div",{style:{width:"100%"}},BdApi.React.createElement("h1",{style:{marginTop:"12px",marginBottom:"8px"},className:[Kt].join(" ")},e.title),BdApi.React.createElement("div",{style:{width:"100%",display:"flex",gap:"6px"}},...e.settingElements.map(t=>BdApi.React.createElement("div",{style:{flex:"1 1 0"}},t)))),Ye=()=>{const{audioSource:e,audioCodec:t,videoCodec:r,bitrate:n,capture:i,encode:o,keyframeInterval:a,setAudioCodec:m,setVideoCodec:d,setAudioSource:s,setKeyframeInterval:g}=$(h=>h.screenshare),[l,f]=_.useState(),[p,S]=_.useState(),[u,c]=_.useState(!1),v=_.useRef();_.useEffect(()=>()=>clearTimeout(v.current),[]);const b=()=>{H.applyToActiveConnections(),c(!0),clearTimeout(v.current),v.current=setTimeout(()=>c(!1),1500)};_.useEffect(()=>{const h=setInterval(async()=>{S(await Ge())},4e3);return()=>clearInterval(h)},[]),_.useEffect(()=>{(async()=>{const h=JSON.parse(await new Promise(N=>ze.getCodecCapabilities(N)));f(h),S(await Ge())})()},[]),_.useEffect(()=>{p&&(p.some(h=>!e||[h.id,"none","default"].includes(e))||s(void 0))},[p]);const E={title:"Capture",settingElements:[BdApi.React.createElement(P,{placeholder:"Width",type:"number",value:i.width,onChange:h=>T(h,i.setWidth)}),BdApi.React.createElement(P,{placeholder:"Height",type:"number",value:i.height,onChange:h=>T(h,i.setHeight)}),BdApi.React.createElement(P,{placeholder:"Framerate",type:"number",value:i.framerate,onChange:h=>T(h,i.setFramerate)})]},y={title:"Encode",settingElements:[BdApi.React.createElement(P,{placeholder:"Width",type:"number",value:o.width,onChange:h=>T(h,o.setWidth)}),BdApi.React.createElement(P,{placeholder:"Height",type:"number",value:o.height,onChange:h=>T(h,o.setHeight)}),BdApi.React.createElement(P,{placeholder:"Framerate",type:"number",value:o.framerate,onChange:h=>T(h,o.setFramerate)})]},A={title:"Bitrate (kbit/s)",settingElements:[BdApi.React.createElement(P,{placeholder:"Minimum",type:"number",value:n.minimum,onChange:h=>T(h,n.setMinimum)}),BdApi.React.createElement(P,{placeholder:"Target",type:"number",value:n.target,onChange:h=>T(h,n.setTarget)}),BdApi.React.createElement(P,{placeholder:"Maximum",type:"number",value:n.maximum,onChange:h=>T(h,n.setMaximum)})]},O={title:"Keyframe Interval",settingElements:[BdApi.React.createElement(P,{placeholder:"Interval",type:"number",value:a,onChange:h=>T(h,g)})]},w={title:"Video Codec (restart)",settingElements:[BdApi.React.createElement(fe,{options:[...l?l.map(h=>({label:`${h.codec}${h.encode?"":" (Unsupported)"}`,value:h.codec})):[]],onChange:h=>d(h),value:r||"H264"})]},D={title:"Audio Codec (restart)",settingElements:[BdApi.React.createElement(fe,{options:[{label:"OPUS",value:"OPUS"}],onChange:h=>m(h),value:t||"OPUS"})]},x={title:"Audio Source (restart)",settingElements:[BdApi.React.createElement(fe,{options:[{label:"Default",value:"default"},{label:"None",value:"none"},...p?p.map(({id:h,name:N})=>({label:N,value:h})):[]],onChange:h=>s(h),value:e||"default"})]};return BdApi.React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"5px"}},BdApi.React.createElement(j,{...E}),BdApi.React.createElement(j,{...y}),BdApi.React.createElement(j,{...A}),BdApi.React.createElement("div",{style:{display:"flex",gap:"6px"}},BdApi.React.createElement(j,{...D}),BdApi.React.createElement(j,{...w}),BdApi.React.createElement(j,{...O})),BdApi.React.createElement(j,{...x}),BdApi.React.createElement("div",{style:{display:"flex",gap:"8px",marginTop:"12px"}},BdApi.React.createElement("button",{type:"button",onClick:b,style:{padding:"8px 16px",borderRadius:"4px",border:"none",cursor:"pointer",fontWeight:600,color:"#fff",background:u?"#248046":"#5865f2"}},u?"Applied":"Apply quality settings to active stream"),BdApi.React.createElement("button",{type:"button",title:"If your local stream preview goes black, reloading the plugin while already live is the most reliable fix - see README's Known Issues.",onClick:zt,style:{padding:"8px 16px",borderRadius:"4px",border:"none",cursor:"pointer",fontWeight:600,color:"#fff",background:"#4f545c"}},"Reload plugin")))},Se=class{static patch(t={}){t.mediaEngineStore&&this.unpatchFunctions.push(...Q(this.mediaEngineStore,{searchProtos:!0,name:"MediaEngineStore",filter:([r,n])=>!["isSelfDeaf","isSelfMute","isSupported","isDeaf","isEnabled","supports","supportsInApp","getInputDetected","isMute","isHardwareMute","getOpenH264"].includes(r)})),t.mediaEngine&&this.unpatchFunctions.push(...Q(this.mediaEngine,{searchProtos:!0,name:"MediaEngine",filter:([r,n])=>!["emit","supports","supported","eachConnection"].includes(r)})),t.connections&&this.unpatchFunctions.push(Y.addListener(this.mediaEngine.emitter,"on","connection",r=>{this.unpatchFunctions.push(...Q(r,{searchProtos:!0,name:"Connection",filter:([n,i])=>!["emit","handleStats","getStats","emitStats","getStreamParameters","setHasActiveVideoOutputSink","getActiveOutputSinkTrackingEnabled"].includes(n)}))}))}static unpatch(){this.unpatchFunctions.forEach(t=>t()),this.unpatchFunctions=[]}};let k=Se;R(k,"mediaEngineStore",ee),R(k,"mediaEngine",Se.mediaEngineStore.getMediaEngine()),R(k,"unpatchFunctions",[]);const Je="better-screenshare-floating-button",Qe="better-screenshare-floating-popout",$e="floatingButtonPosition",Xe="floatingPopoutPosition",Gt=5,F=40,me=320,ge=({top:e,left:t},{width:r,height:n})=>({left:Math.min(Math.max(t,0),Math.max(window.innerWidth-r,0)),top:Math.min(Math.max(e,0),Math.max(window.innerHeight-n,0))}),Ze=(e,t,r,n,i=e)=>{let o=!1,a=0,m=0,d=0,s=0;const g=f=>{const p=f.clientX-a,S=f.clientY-m;if(!o&&Math.hypot(p,S)>Gt&&(o=!0,i.style.cursor="grabbing"),o){const u=ge({top:d+S,left:s+p},t);e.style.transform="",e.style.top=`${u.top}px`,e.style.left=`${u.left}px`,e.style.bottom=""}},l=()=>{if(i.style.cursor="grab",document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",l),o){const f=e.getBoundingClientRect();r({top:f.top,left:f.left})}else n()};i.addEventListener("mousedown",f=>{o=!1,a=f.clientX,m=f.clientY;const p=e.getBoundingClientRect();d=p.top,s=p.left,document.addEventListener("mousemove",g),document.addEventListener("mouseup",l)})};class U{static mount(){this.unmount();const t=BdApi.Data.load(C().name,$e),r=ge(t??{top:window.innerHeight-F-16,left:window.innerWidth-F-16},{width:F,height:F}),n=document.createElement("div");n.id=Je,n.title="BetterScreenshare quality settings (drag to move)",n.textContent="⚙",n.style.cssText=`
      position: fixed;
      top: ${r.top}px;
      left: ${r.left}px;
      width: ${F}px;
      height: ${F}px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #5865f2;
      color: #fff;
      font-size: 18px;
      cursor: grab;
      z-index: 9999;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
      user-select: none;
    `;const i=document.createElement("div");i.id=Qe,i.style.cssText=`
      position: fixed;
      display: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${me}px;
      max-height: 70vh;
      overflow-y: auto;
      background: #2b2d31;
      color: #dcddde;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
      z-index: 9999;
      padding: 12px;
      box-sizing: border-box;
    `;const o=document.createElement("div");o.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-weight: 600; cursor: grab; user-select: none;";const a=document.createElement("span");a.textContent="BetterScreenshare Quality";const m=document.createElement("span");m.textContent="✕",m.style.cssText="cursor: pointer; opacity: 0.7;",m.addEventListener("mousedown",s=>s.stopPropagation()),m.addEventListener("click",()=>this.hidePopout()),o.appendChild(a),o.appendChild(m);const d=document.createElement("div");i.appendChild(o),i.appendChild(d),document.body.appendChild(n),document.body.appendChild(i),this.button=n,this.popout=i,this.content=d,Ze(n,{width:F,height:F},s=>BdApi.Data.save(C().name,$e,s),()=>this.togglePopout()),Ze(i,{width:i.offsetWidth||me,height:i.offsetHeight||400},s=>BdApi.Data.save(C().name,Xe,s),()=>{},o),this.outsideClickHandler=s=>{var l,f,p;const g=s.target;((l=this.popout)==null?void 0:l.style.display)!=="none"&&!((f=this.popout)!=null&&f.contains(g))&&!((p=this.button)!=null&&p.contains(g))&&this.hidePopout()},document.addEventListener("mousedown",this.outsideClickHandler)}static togglePopout(){if(this.popout)if(this.popout.style.display==="none"){!this.reactRoot&&this.content&&(this.reactRoot=BdApi.ReactDOM.createRoot(this.content),this.reactRoot.render(BdApi.React.createElement(Ye)));const t=BdApi.Data.load(C().name,Xe);if(t){const r=ge(t,{width:me,height:this.popout.offsetHeight||400});this.popout.style.transform="",this.popout.style.top=`${r.top}px`,this.popout.style.left=`${r.left}px`}else this.popout.style.transform="translate(-50%, -50%)",this.popout.style.top="50%",this.popout.style.left="50%";this.popout.style.display="block"}else this.hidePopout()}static hidePopout(){this.popout&&(this.popout.style.display="none")}static unmount(){var t,r,n,i,o;this.outsideClickHandler&&(document.removeEventListener("mousedown",this.outsideClickHandler),this.outsideClickHandler=void 0),(t=this.reactRoot)==null||t.unmount(),this.reactRoot=void 0,(r=this.button)==null||r.remove(),this.button=void 0,(n=this.popout)==null||n.remove(),this.popout=void 0,this.content=void 0,(i=document.getElementById(Je))==null||i.remove(),(o=document.getElementById(Qe))==null||o.remove()}}R(U,"button"),R(U,"popout"),R(U,"content"),R(U,"reactRoot"),R(U,"outsideClickHandler");const Yt=`
[class^="selectDropdown_"] {
  z-index: 999999 !important;
}

.bd-modal-footer {
  z-index: -1 !important;
}
`;class qe{static styleId(){return`${C().name}-dropdown-fix`}static patch(){BdApi.DOM.addStyle(this.styleId(),Yt)}static unpatch(){BdApi.DOM.removeStyle(this.styleId())}}module.exports=class extends st{constructor(){super(),et(it)}async start(){try{H.patch()}catch(e){console.error("[BetterScreenshare debug] Screenshare.patch() failed",e)}try{U.mount()}catch(e){console.error("[BetterScreenshare debug] FloatingButton.mount() failed",e)}try{qe.patch()}catch(e){console.error("[BetterScreenshare debug] DropdownFix.patch() failed",e)}}stop(){ot(),k.unpatch(),H.unpatch(),U.unmount(),qe.unpatch(),Y.removeAllListeners()}getSettingsPanel(){return BdApi.React.createElement(Ye)}}})(BdApi.React);
