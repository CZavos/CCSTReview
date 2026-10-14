window.QUIZ_META = {
  "title": "Cisco CCST Network Practice Quiz",
  "source_note": "Questions and explanations transcribed from the supplied scanned document. The original scan's explanation for the NAT question contains wording that may be technically imprecise; this site preserves the source's intended answer and distinguishes related NAT concepts. Question 34's scan does not clearly distinguish between show interface and show interface FastEthernet0/0; verify that item against your original answer key."
};
window.QUIZ_QUESTIONS = [
  {
    "id": 1,
    "type": "order",
    "prompt": "Using drag and drop, arrange the levels of the TCP/IP model in the correct order from top to bottom.",
    "items": [
      "Internet",
      "Application",
      "Network Access",
	"Transport"
    ],
    "answer": [
      "Application",
      "Transport",
      "Internet",
      "Network Access"
    ],
    "explanation": "The levels of the TCP/IP model, from top to bottom, are Application, Transport, Internet, and Network Access.",
    "feedback": {
      "Application": "Application is the top TCP/IP layer.",
      "Transport": "Transport is below Application and above Internet.",
      "Internet": "Internet is below Transport and above Network Access.",
      "Network Access": "Network Access is the bottom layer in this ordering."
    }
  },
  {
    "id": 2,
    "type": "matching",
    "prompt": "Using drag and drop, match each network cable connector with the cable to which it belongs.",
    "pairs": [
      {
        "left": "Coaxial connector",
        "right": "Copper cable"
      },
      {
        "left": "RJ-45 connector",
        "right": "Twisted-pair cable"
      },
      {
        "left": "Straight Tip (ST) connector",
        "right": "Fiber-optic cable"
      }
    ],
    "explanation": "Coaxial connectors are attached to copper cables that are not twisted-pair. RJ-45 connectors are attached to twisted-pair cables. Straight Tip (ST) connectors are attached to fiber-optic cables."
  },
  {
    "id": 3,
    "type": "single",
    "prompt": "A network administrator is configuring an external modem for internet access for a company's network users. The company has three public IP addresses and wants to use them to provide internet access for company devices. Which type of NAT should the administrator set up?",
    "options": [
      "Dynamic NAT",
      "Static NAT",
      "Port Address Translation (PAT)",
      "Overlapping NAT"
    ],
    "answer": [
      0
    ],
    "explanation": "The source explanation identifies Dynamic NAT for this scenario. Static NAT uses a one-to-one mapping between private and public IP addresses. PAT uses ports to track which devices make requests. Overlapping NAT is used when IP addresses overlap or are shared across organizations.",
    "feedback": [
      "Dynamic NAT assigns translations dynamically from a pool of public addresses; this is the source's intended answer for the scenario.",
      "Static NAT uses a fixed one-to-one mapping between private and public IP addresses.",
      "PAT uses port numbers to track requests and commonly lets many devices share one public IP address.",
      "Overlapping NAT addresses overlapping IP address ranges across organizations."
    ]
  },
  {
    "id": 4,
    "type": "single",
    "prompt": "Which method of remote access is not encrypted and is considered risky to use?",
    "options": [
      "Remote Desktop Protocol (RDP)",
      "Telnet",
      "Secure Shell (SSH)",
      "Virtual Private Network (VPN)"
    ],
    "answer": [
      1
    ],
    "explanation": "Telnet is not encrypted, so transmitted data is sent in plain text. RDP and SSH are encrypted. The source also notes that a VPN is encrypted but is not itself considered a remote-access method in this question's framing.",
    "feedback": [
      "RDP supports encrypted remote desktop communication.",
      "Telnet transmits data in plaintext by default and is the insecure option.",
      "SSH encrypts remote terminal sessions.",
      "A VPN establishes an encrypted tunnel; the source notes it is not considered a remote-access method in this question's framing."
    ]
  },
  {
    "id": 5,
    "type": "single",
    "prompt": "A network administrator learning to read network logs sees activity from a device with address 38-AA-29-B4-C3-F0. Which type of address is this?",
    "options": [
      "MAC address",
      "IPv4 address",
      "Gateway address",
      "IPv6 address"
    ],
    "answer": [
      0
    ],
    "explanation": "This is a MAC address, a hardware address at OSI Layer 2, the Data Link layer. An IPv4 address is a 32-bit logical address such as 192.168.0.1. An IPv6 address is a 128-bit logical address. A gateway address is the IP address of a router used to connect one network to another.",
    "feedback": [
      "A six-pair hexadecimal address like this is a MAC hardware address used at the Data Link layer.",
      "IPv4 addresses are 32-bit logical addresses, commonly written as four decimal octets.",
      "A gateway address is a router's IP address, not a hardware address in this format.",
      "IPv6 addresses are 128-bit logical addresses written using hexadecimal groups separated by colons."
    ]
  },
  {
    "id": 6,
    "type": "matching",
    "prompt": "Using the dropdown lists, identify which tool is used for each type of network performance measurement.",
    "pairs": [
      {
        "left": "Measures the bandwidth of a network connection",
        "right": "Speed test"
      },
      {
        "left": "Measures throughput, delay, and packet loss within a connection",
        "right": "iperf"
      }
    ],
    "choices": [
      "Latency",
      "Speed test",
      "iperf"
    ],
    "explanation": "A speed test measures bandwidth. iperf is used to measure throughput, delay, and packet loss. Latency is the delay of a data packet between a source and destination; latency itself is not a test."
  },
  {
    "id": 7,
    "type": "matching",
    "prompt": "Using the dropdown lists, identify which tool is used for each type of network performance measurement.",
    "pairs": [
      {
        "left": "CAN",
        "right": "A network of computers across multiple buildings at a hospital"
      },
      {
        "left": "LAN",
        "right": "A network of computers in a classroom"
      },
      {
        "left": "PAN",
        "right": "A connection between a person's mobile device and wireless earbuds"
      }
    ],
    "explanation": "A Campus Area Network (CAN) spans multiple buildings at one location, such as a hospital or college campus. A Personal Area Network (PAN) connects devices belonging to one person, such as Bluetooth devices. A Local Area Network (LAN) is confined to a limited area such as a building, classroom, or department."
  },
  {
    "id": 8,
    "type": "single",
    "prompt": "A business of real estate offices wants to move all server resources to the cloud and have as few server-management tasks as possible. Which type of cloud service should it choose?",
    "options": [
      "Hybrid cloud",
      "Community cloud",
      "Public cloud",
      "Private cloud"
    ],
    "answer": [
      2
    ],
    "explanation": "In a public cloud, the provider maintains the physical hardware, reducing server-management tasks for the client. With a private or hybrid cloud, the client retains significant management tasks. A community cloud is shared by two or more entities; multiple offices within one business do not by themselves require a community cloud.",
    "feedback": [
      "A hybrid cloud combines environments and may leave the client with significant management responsibilities.",
      "A community cloud is shared by two or more distinct entities.",
      "The public cloud provider maintains the physical infrastructure, reducing the client's server-management burden.",
      "A private cloud generally leaves the client with more infrastructure-management responsibility than a public cloud."
    ]
  },
  {
    "id": 9,
    "type": "single",
    "prompt": "What is one main benefit of Software as a Service (SaaS)?",
    "options": [
      "Provisioning a virtual machine to host a server in the cloud",
      "Using an office suite in a browser instead of installing it",
      "Hosting a database instance in the cloud",
      "Storing functions in a library for use across apps"
    ],
    "answer": [
      1
    ],
    "explanation": "SaaS lets people use software without installing it, often through a web browser. Platform as a Service (PaaS) provides development features such as app instances or function libraries. Virtual machines fall under Infrastructure as a Service (IaaS).",
    "feedback": [
      "Virtual machines are an example of IaaS, not the main SaaS benefit described.",
      "Using software through a browser without installing it is a typical SaaS benefit.",
      "Hosting a database instance is closer to an infrastructure/platform service example than the described SaaS benefit.",
      "Providing development libraries is a PaaS-style development feature."
    ]
  },
  {
    "id": 10,
    "type": "single",
    "prompt": "Employees working remotely need to connect securely to the company's network. What should they use on their devices?",
    "options": [
      "VPN",
      "RDP",
      "HTTPS",
      "SFTP"
    ],
    "answer": [
      0
    ],
    "explanation": "A VPN establishes an encrypted tunnel between connecting devices and can secure remote connections to a corporate network. HTTPS secures web connections. SFTP secures file transfer. RDP is used for remote connections to Windows computers.",
    "feedback": [
      "A VPN creates an encrypted tunnel for secure remote network access.",
      "RDP is used for remote desktop connections, not as the general secure network tunnel described.",
      "HTTPS secures web connections to a web server.",
      "SFTP is used for secure file transfer."
    ]
  },
  {
    "id": 11,
    "type": "matching",
    "prompt": "Using drag and drop, match each file-transfer type to its description.",
    "pairs": [
      {
        "left": "FTP",
        "right": "An insecure file-transfer method that can use authentication"
      },
      {
        "left": "TFTP",
        "right": "A file-transfer method that does not use authentication"
      },
      {
        "left": "SFTP",
        "right": "A secure file-transfer method"
      }
    ],
    "explanation": "FTP transfers files insecurely but can use authentication. SFTP securely transfers files over SSH. TFTP is a simple file-transfer protocol that does not use authentication."
  },
  {
    "id": 12,
    "type": "multi",
    "prompt": "Which protocols transfer data securely from a source to a destination? Choose two.",
    "options": [
      "FTP",
      "HTTPS",
      "DNS",
      "SFTP"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "HTTPS and SFTP transfer data securely. By default, DNS and TFTP do not transfer data securely. FTP is an insecure file-transfer method.",
    "feedback": [
      "FTP is an insecure file-transfer method, even though it can use authentication.",
      "HTTPS secures web communication using encryption.",
      "DNS resolves hostnames to IP addresses and does not by default provide secure data transfer.",
      "SFTP is a secure file-transfer protocol."
    ]
  },
  {
    "id": 13,
    "type": "single",
    "prompt": "A network administrator wants to avoid ping-flood attacks. Which protocol should the administrator block on the company firewall?",
    "options": [
      "DHCP",
      "NTP",
      "DNS",
      "ICMP"
    ],
    "answer": [
      3
    ],
    "explanation": "Ping uses Internet Control Message Protocol (ICMP). Blocking incoming ICMP requests can help thwart ping attacks. DHCP requests an IP address, NTP synchronizes time, and DNS resolves hostnames to IP addresses.",
    "feedback": [
      "DHCP is used to request IP configuration from a DHCP server.",
      "NTP synchronizes time across network devices.",
      "DNS resolves hostnames to IP addresses.",
      "Ping uses ICMP, so blocking incoming ICMP requests can help thwart ping-flood attacks."
    ]
  },
  {
    "id": 14,
    "type": "single",
    "prompt": "Examine the IPv4 address 192.168.0.1/24. What does /24 represent?",
    "options": [
      "The number of bits in the subnet mask for the host portion",
      "The number of hosts in the network",
      "The number of subnets in the network",
      "The number of bits in the subnet mask for the network portion"
    ],
    "answer": [
      3
    ],
    "explanation": "The /24 represents the number of bits in the subnet mask used for the network portion. The host portion is the remaining eight bits in a 32-bit IPv4 address. It does not represent the number of hosts or subnets.",
    "feedback": [
      "The prefix describes the network portion, not the host portion.",
      "The prefix length is not a count of hosts.",
      "The prefix length does not directly state the number of subnets.",
      "/24 means 24 bits identify the network prefix, leaving 8 host bits."
    ]
  },
  {
    "id": 15,
    "type": "matching",
    "prompt": "For each situation, indicate whether a connection-oriented or connectionless protocol should be used.",
    "pairs": [
      {
        "left": "Web pages",
        "right": "Connection-oriented"
      },
      {
        "left": "Video streams",
        "right": "Connectionless"
      },
      {
        "left": "DHCP requests",
        "right": "Connectionless"
      }
    ],
    "explanation": "Web pages should use a connection-oriented protocol because packets received from a web server need to be acknowledged. Video streams can use connectionless delivery because missed packets are not resent. DHCP requests use connectionless communication because the response assigns an IP address and does not require acknowledgments in the way described."
  },
  {
    "id": 16,
    "type": "matching",
    "prompt": "Match each IPv6 address prefix with the address type and purpose.",
    "pairs": [
      {
        "left": "2001::/3",
        "right": "Global unicast; publicly routable"
      },
      {
        "left": "fe80::/10",
        "right": "Link-local; not publicly routable"
      },
      {
        "left": "ff00::/8",
        "right": "Multicast; assigned to a group of devices"
      }
    ],
    "explanation": "Global unicast addresses begin with 2 or 3 and are publicly routable. Link-local addresses begin with fe80 and are not publicly routable. Multicast addresses begin with ff and are assigned to a group so it can receive data from one sender."
  },
  {
    "id": 17,
    "type": "multi",
    "prompt": "Which devices or applications help protect a computer from unwanted incoming data packets? Choose two.",
    "options": [
      "Firewall",
      "Antimalware application",
      "Intrusion Detection System (IDS)",
      "Intrusion Prevention System (IPS)"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "Firewalls and intrusion prevention systems (IPS) help protect devices against unwanted inbound traffic and data packets. Antimalware does not specifically filter unwanted packets. An IDS detects potential unwanted traffic but does not stop it from penetrating a device.",
    "feedback": [
      "A firewall can filter inbound packets according to configured rules.",
      "Antimalware focuses on malicious software rather than specifically filtering unwanted inbound packets.",
      "An IDS detects suspicious traffic but does not itself stop the traffic.",
      "An IPS can prevent unwanted traffic from reaching a device."
    ]
  },
  {
    "id": 18,
    "type": "single",
    "prompt": "By default, which Windows user or group has permission to print to a network printer but not administer it?",
    "options": [
      "Administrators",
      "Users",
      "Everyone",
      "The account that installed the printer"
    ],
    "answer": [
      2
    ],
    "explanation": "By default, Everyone has permission to print to, but not administer, a printer. Administrators and the account that set up the printer have full control.",
    "feedback": [
      "Administrators have full control over the network printer by default.",
      "The source distinguishes Users from Everyone: Users is not the default group identified for print-only permission.",
      "Everyone can print but does not have printer-administration rights by default.",
      "The account that set up the printer has full control by default."
    ]
  },
  {
    "id": 19,
    "type": "multi",
    "prompt": "On Linux, which commands show explanations of the ip command and its attributes? Choose two.",
    "options": [
      "man ip",
      "ipr",
      "ip help",
      "ip --help"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "man ip displays the manual page for the ip command. ip --help shows a brief summary and available attributes; the two dashes are required. ipconfig is a Windows command, and the source explains that the brief-help form is not the single-dash ip help syntax.",
    "feedback": [
      "man ip displays the full manual page for the ip utility.",
      "ipr is not the command described for displaying ip documentation.",
      "The documented help form uses two dashes before help, not a single word-form help argument.",
      "ip --help displays a brief summary and attributes; the two dashes are required."
    ]
  },
  {
    "id": 20,
    "type": "single",
    "prompt": "A technician needs very short cables to connect wall-mounted network ports to a nearby switch in a network closet. Which cable type is appropriate?",
    "options": [
      "Coaxial cables",
      "Patch cables",
      "Fiber cables",
      "RJ-11 cables"
    ],
    "answer": [
      1
    ],
    "explanation": "Patch cables are short cables used to connect devices to one another and to switches. Coaxial cables are commonly used for TV and cable internet. RJ-11 cables are used for phone lines. Fiber cables are commonly used for backbones or longer-distance connections.",
    "feedback": [
      "Coaxial cables are commonly used for television and cable internet connections.",
      "Patch cables are short cables used to connect network devices and switches.",
      "Fiber cables are commonly used for network backbones or longer-distance connections.",
      "RJ-11 cables are used for phone lines."
    ]
  },
  {
    "id": 21,
    "type": "single",
    "prompt": "A video camera needs power, but there are no nearby wall outlets. A network switch is nearby. What can be enabled on the switch to power the camera?",
    "options": [
      "Serial port",
      "Console port",
      "PoE",
      "USB port"
    ],
    "answer": [
      2
    ],
    "explanation": "PoE (Power over the Ethernet) enables an Ethernet port on a switch to supply power to a device. A console port provides a direct connection but not power. A serial port supports serial connections but does not provide power. A USB port can provide power in some circumstances but is not normally used for this switch-camera scenario.",
    "feedback": [
      "A serial port supports serial communication and does not supply camera power in this scenario.",
      "A console port provides direct access to a device but does not provide power.",
      "PoE allows a switch's Ethernet port to supply power to a connected device.",
      "USB can provide power in some circumstances, but it is not the intended switch feature for this scenario."
    ]
  },
  {
    "id": 22,
    "type": "single",
    "prompt": "Which wireless network connection is licensed and regulated?",
    "options": [
      "6 GHz Wi-Fi",
      "2.4 GHz Wi-Fi",
      "Cellular",
      "5 GHz Wi-Fi"
    ],
    "answer": [
      2
    ],
    "explanation": "Cellular networks are licensed and regulated. Wi-Fi frequencies such as 2.4 GHz, 5 GHz, and 6 GHz are regulated but are not licensed in the same way.",
    "feedback": [
      "The 6 GHz Wi-Fi band is regulated but is not licensed in the way cellular service is.",
      "The 2.4 GHz Wi-Fi band is regulated but is not licensed in the way cellular service is.",
      "Cellular networks use licensed spectrum and are regulated.",
      "The 5 GHz Wi-Fi band is regulated but is not licensed in the way cellular service is."
    ]
  },
  {
    "id": 23,
    "type": "matching",
    "prompt": "Match each network-device port or component with its characteristic.",
    "pairs": [
      {
        "left": "Console port",
        "right": "Allows direct access while bypassing an inoperable network"
      },
      {
        "left": "Serial port",
        "right": "Transmits data one bit at a time"
      },
      {
        "left": "SFP transceiver",
        "right": "Adds possible connections and is hot-swappable"
      }
    ],
    "explanation": "A console port provides a direct connection and bypasses the network. Serial connections transmit data one bit at a time. A Small Form-factor Pluggable (SFP) is a hot-swappable transceiver that lets a device host additional connections."
  },
  {
    "id": 24,
    "type": "single",
    "prompt": "Given this ipconfig output - IPv4 Address: 10.0.0.37; Link-Local: fe80::aa70:5dff:feac:5909; Subnet Mask: 255.255.255.0; Default Gateway IPv4: 10.0.0.1 - which IPv4 address does the device use to communicate with other networks, including the internet?",
    "options": [
      "10.0.0.1",
      "fe80::aa70:5dff:feac:5909",
      "255.255.255.0",
      "10.0.0.37"
    ],
    "answer": [
      0
    ],
    "explanation": "The default gateway is used to communicate with other networks. The IPv4 default gateway is 10.0.0.1. The fe80 address shown is the IPv6 gateway; 10.0.0.37 is the device's own IPv4 address; 255.255.255.0 is the subnet mask for a 10.0.0.0/24 network.",
    "feedback": [
      "10.0.0.1 is the IPv4 default gateway used to reach other networks.",
      "The fe80 address is the IPv6 default gateway, not an IPv4 address.",
      "255.255.255.0 is the subnet mask, not the gateway address.",
      "10.0.0.37 is the device's own IPv4 address, not its gateway."
    ]
  },
  {
    "id": 25,
    "type": "single",
    "prompt": "A switch with an empty MAC address table receives a frame for another device on the same network. How does the switch handle the frame when the destination MAC address is unknown?",
    "options": [
      "Send it to every device on the network",
      "Ping each device until it finds a match",
      "Send it to the network's default gateway",
      "Flood it out every port except the port the frame arrived on"
    ],
    "answer": [
      3
    ],
    "explanation": "When the destination MAC address is unknown, the switch floods the frame out all ports except the port on which it arrived. As the switch learns source MAC addresses, it adds port/MAC combinations to its MAC address table. It does not ping every device or send the frame to the default gateway to learn the MAC address.",
    "feedback": [
      "The switch floods an unknown unicast frame to all other ports, not literally to the entire network by any separate mechanism.",
      "Switches do not ping each device to learn MAC addresses.",
      "The default gateway is not used to discover a destination MAC address on the local network.",
      "This is the correct unknown-destination behavior: flood out all ports except the incoming port."
    ]
  },
  {
    "id": 26,
    "type": "single",
    "prompt": "A troubleshooting rule requires a ticket to be escalated if it cannot be solved within the first hour. What type of troubleshooting documentation is this?",
    "options": [
      "Prioritization",
      "Policies and procedures",
      "Accurate documentation",
      "Complete documentation"
    ],
    "answer": [
      1
    ],
    "explanation": "Requirements for troubleshooting methods are part of an organization's policies and procedures. Ticket documentation focuses on a single issue. Prioritization focuses on urgency.",
    "feedback": [
      "Prioritization addresses the urgency of a ticket, not the escalation rule itself.",
      "Accurate documentation records information correctly; it is not the category for an escalation requirement.",
      "Complete documentation concerns the completeness of issue records, not a general troubleshooting rule.",
      "An escalation requirement is part of organizational troubleshooting policies and procedures."
    ]
  },
  {
    "id": 27,
    "type": "multi",
    "prompt": "What can Wireshark reveal by analyzing packets? Choose two.",
    "options": [
      "A network map",
      "The volume of ICMP packets going to and from a device",
      "The machine name of a data source",
      "Whether a data packet is encrypted"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "Wireshark displays packet information, including packet type, source, and destination. It can identify ICMP packets and help show ping volume over time, and packet analysis can show whether a packet is encrypted. Packet analyzers do not build network maps and do not necessarily show machine names for data sources.",
    "feedback": [
      "Packet analysis does not automatically build a network map.",
      "Wireshark can identify ICMP packets and help show their volume over a period of time.",
      "Packet analyzers do not necessarily show the machine name for a packet source.",
      "Packet analysis can help determine whether data in a packet is encrypted."
    ]
  },
  {
    "id": 28,
    "type": "matching",
    "prompt": "Match each command with its role in acquiring IP-address information.",
    "pairs": [
      {
        "left": "ipconfig",
        "right": "Acquire IP-address information from a Windows device"
      },
      {
        "left": "ifconfig",
        "right": "Acquire IP-address information from Linux; deprecated in favor of ip"
      },
      {
        "left": "ip",
        "right": "Acquire IP-address information from Linux; current preferred utility"
      }
    ],
    "explanation": "ipconfig is used on Windows. ifconfig was used on Linux but has been deprecated in favor of the ip command, which is also used to acquire IP-address information on Linux."
  },
  {
    "id": 29,
    "type": "single",
    "prompt": "A technician pings websites and receives “General failure” for every site. A firewall rule was recently added. Which rule most likely caused this result?",
    "options": [
      "Outbound port 443 is blocked",
      "Outbound ICMP traffic is blocked",
      "Outbound port 80 is blocked",
      "Outbound DHCP traffic is blocked"
      
    ],
    "answer": [
      1
    ],
    "explanation": "If ICMP packets are blocked for outbound traffic, a device can receive a “General failure” error when trying to ping. Blocking ports 80 (HTTP) or 443 (HTTPS) does not by itself stop ping. DHCP requests IP addresses and does not test connectivity to a destination.",
    "feedback": [
      "Port 443 is used for HTTPS; blocking it does not by itself prevent ping.",
      "Port 80 is used for HTTP; blocking it does not by itself prevent ping.",
      "DHCP requests IP addresses; it is not the protocol used to ping a destination.",
      "Blocking outbound ICMP is consistent with the General failure results when attempting to ping."
    ]
  },
  {
    "id": 30,
    "type": "single",
    "prompt": "A router is inaccessible over the network. Which port can a support technician use to connect directly and view its information?",
    "options": [
      "Serial port",
      "Console port",
      "PoE port",
      "Terminal emulator"
    ],
    "answer": [
      1
    ],
    "explanation": "A console port allows a direct connection to a router or switch and bypasses the network. A serial port does not itself bypass the network in the way described. PoE supplies power. A terminal emulator is an application, not a port.",
    "feedback": [
      "A serial port connects devices that support serial communication; it is not the direct management port described.",
      "A console port allows direct access to the router when network access is unavailable.",
      "A PoE port provides power over Ethernet; it is not the direct management port described.",
      "A terminal emulator is software, not a physical port on the router."
    ]
  },
  {
    "id": 31,
    "type": "single",
    "prompt": "Which type of file stores data in key-value pairs?",
    "options": [
      "JSON",
      "XML",
      "Python",
      "HTML"
    ],
    "answer": [
      0
    ],
    "explanation": "JavaScript Object Notation (JSON) stores data in key-value pairs. XML stores data using tags. HTML is used to display webpages. Python is a general-purpose programming language and does not inherently mean data is stored in key-value pairs.",
    "feedback": [
      "JSON stores data in key-value pairs.",
      "XML uses tags to structure data and is not necessarily a key-value format.",
      "Python is a general-purpose programming language, not a file format defined by key-value pairs.",
      "HTML is used to structure and display webpages."
    ]
  },
  {
    "id": 32,
    "type": "multi",
    "prompt": "When beginning configuration of a wireless access point for a guest network, what should be the first two changes? Choose two.",
    "options": [
      "Change the default SSID",
      "Set the wireless security protocol",
      "Set up MAC filtering",
      "Change the default password"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "The default password and SSID should be changed immediately because default information can be found easily online. The wireless security protocol and MAC filtering can also be configured, but the source says these should be done after changing the default password and SSID.",
    "feedback": [
      "Changing the default SSID is one of the first two recommended changes.",
      "Changing the default password is one of the first two recommended changes.",
      "The wireless security protocol should be configured, but the source places it after changing the default password and SSID.",
      "MAC filtering can be configured later; the source prioritizes changing the default password and SSID first."
    ]
  },
  {
    "id": 33,
    "type": "single",
    "prompt": "Which Cisco IOS command shows each router interface, its IP address, and status in a compact one-line-per-interface format?",
    "options": [
      "show ip interface",
      "show ip route",
      "show ip protocols",
      "show ip interface brief"
    ],
    "answer": [
      3
    ],
    "explanation": "show ip interface brief displays each interface, its IP address, and pertinent status information in a compact format. show ip interface provides more detail. show ip protocols displays routing protocol information. show ip route displays static and dynamic routes.",
    "feedback": [
      "show ip interface provides much more detail about each interface.",
      "show ip route displays static and dynamic routes.",
      "show ip protocols displays routing protocol information and statistics.",
      "show ip interface brief displays interfaces and key status information compactly, one line per interface."
    ]
  },
  {
    "id": 34,
    "type": "single",
    "prompt": "A technician examines detailed output for a single interface, including hardware address, MTU, duplex, speed, counters, and errors. Which command most likely produced it?",
    "options": [
      "show interface",
      "show ip interface",
      "show run",
      "show interface FastEthernet0/0"
    ],
    "answer": [
      0
    ],
    "explanation": "The source's answer choices include show interface and show interface FastEthernet0/0. The displayed output is detailed interface information. The OCR does not clearly establish whether the original intended answer was the all-interface command or the specific-interface command; use the command shown by your original answer key if available.",
    "feedback": [
      "show interface displays detailed information for interfaces; this matches the type of output shown.",
      "show ip interface focuses on IP-related interface information rather than all the physical/interface counters shown.",
      "show run displays the running configuration, not this standard detailed interface-status output.",
      "show interface FastEthernet0/0 displays detailed information for one named interface. The scan does not clearly distinguish this from the general show interface command."
    ]
  },
  {
    "id": 35,
    "type": "single",
    "prompt": "The show privilege command returns “Current privilege level is 15.” What does this indicate?",
    "options": [
      "Tasks require privilege level 15 by default",
      "The user has the lowest privilege level",
      "Show commands require privilege level 15",
      "The current user has the highest privilege level"
    ],
    "answer": [
      3
    ],
    "explanation": "Privilege level 15 is the highest privilege level on a Cisco device. The default privilege level is 1. The output does not mean all tasks require level 15 or that show commands require level 15.",
    "feedback": [
      "The default privilege level is 1, not 15.",
      "Level 15 is the highest, not the lowest, privilege level.",
      "The output does not mean show commands require privilege level 15.",
      "Privilege level 15 indicates the current user has the highest privilege level."
    ]
  },
  {
    "id": 36,
    "type": "single",
    "prompt": "Which identity store does Microsoft use to organize users, devices, settings, and permissions for on-premises networks?",
    "options": [
      "OpenLDAP",
      "Novell Directory Services",
      "Active Directory",
      "Azure Active Directory",
      
    ],
    "answer": [
      2
    ],
    "explanation": "Active Directory organizes users, devices, settings, and permissions for on-premises networks. Azure Active Directory is the cloud-based version described in the source. OpenLDAP is an open-source identity store; Novell Directory Services was an alternative directory service.",
    "feedback": [
      "OpenLDAP is an open-source identity store, not Microsoft's on-premises directory service.",
      "Novell Directory Services was an alternative directory service.",
      "Azure Active Directory is the cloud-based version described in the source, not the on-premises product asked for.",
      "Active Directory is Microsoft's directory service for organizing users, devices, settings, and permissions on-premises."
    ]
  },
  {
    "id": 37,
    "type": "single",
    "prompt": "Which wireless security standard uses TKIP for encryption?",
    "options": [
      "WPA2",
      "WPA",
      "WPA3",
      "WEP"
    ],
    "answer": [
      1
    ],
    "explanation": "WPA uses Temporal Key Integrity Protocol (TKIP). WEP uses RC4. WPA2 uses 128-bit AES in the source explanation, and WPA3 uses 192-bit AES in the source explanation.",
    "feedback": [
      "The source associates WPA2 with AES rather than TKIP.",
      "WPA uses Temporal Key Integrity Protocol (TKIP).",
      "The source associates WPA3 with AES rather than TKIP.",
      "WEP uses RC4, not TKIP, according to the source explanation."
    ]
  }
];

